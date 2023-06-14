import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Clipboard, Alert } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useState } from 'react';

import Icon from '../../icons/icon-tag';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';

import TTS from '../../../utils/TTS';
import RNFS from 'react-native-fs';
import BaseFrame from '../base-frame';
import editIcon from '../../icons/edit-icon';
import COLOR from '../../../constants/color';

const Sentence = (props) => {

  useEffect(() => {
    TTS.initTTS();
  }, []);

  const handleCopyClick = () => {
    Clipboard.setString(props.text);
    Alert.alert('Copy thành công vào clipboard');
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [netInfo, setNetInfo] = useState(useNetInfo()); 

  useEffect(() => {
    // check that the netInfo object is defined before subscribing to it
    if (netInfo && netInfo.addEventListener) {
      const unsubscribe = netInfo.addEventListener(setNetInfo);
      return () => unsubscribe();
    }
  }, [netInfo]);

  const handleSpeakButtonClick = () => {
    if (isPlaying) {
      TTS.stop();
      setIsPlaying(false);
      return;
    }
  
    if (netInfo.isConnected) {
      TTS.save(props.text)
        .then((path) => {
          if (path) {
            setIsPlaying(true);
            props.audioPath = path;
            TTS.speak(path);
            console.log('File saved to: ' + path);
            const tempPath = RNFS.DocumentDirectoryPath + '/' + (props.audioPath ? props.audioPath.split('/').pop() : '');
            console.log('Temporary file path: ' + tempPath);
            // you can access and manage the file using RNFS functions here
          }
        })
        .catch((error) => {
          console.log(error + ' TTS_save');
        });
    } else {
      if (props.audioPath && props.audioPath.split) {
        const tempPath = RNFS.DocumentDirectoryPath + '/' + props.audioPath.split('/').pop();
        RNFS.exists(props.audioPath)
          .then((exists) => {
            if (exists) {
              setIsPlaying(true);
              TTS.playSavedAudio(props.audioPath);
            } else {
              alert('Không có kết nối mạng và file âm thanh cũng không được lưu trên thiết bị.');
            }
          })
          .catch((error) => {
            console.log(error + ' RNFS');
          });
      } else {
        alert('Không có kết nối mạng và file âm thanh cũng không được lưu trên thiết bị.');
      }
    }
  };

  return (
    <BaseFrame itemList={[
      <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
        <Icon icon={copyIcon} />
      </TouchableOpacity>,
      <TouchableOpacity style={styles.iconBox} onPress={props.onEdit}>
        <Icon icon={editIcon} />
      </TouchableOpacity>,
      <TouchableOpacity style={styles.iconBox} onPress={() => handleSpeakButtonClick()}>
        <Icon icon={speakIcon} />
      </TouchableOpacity>
    ]}>
      <Text style={styles.text}>{props.text}</Text>
    </BaseFrame>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLOR.TEXT,
    fontSize: 15,
  },
});

export default Sentence;