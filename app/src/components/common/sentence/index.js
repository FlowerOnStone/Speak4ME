import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Clipboard, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from '../../icons/icon-tag';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';

import TTS from '../../../utils/TTS';
import RNFS from 'react-native-fs';
import BaseFrame from '../base-frame';
import editIcon from '../../icons/edit-icon';
import COLOR from '../../../constants/color';

const NetInfo = require('@react-native-community/netinfo');

const saveSpeechToFile = async (filePath, speech) => {
  console.log(filePath + " " + speech);
  try {
    const audioData = await TTS.Tts.speechToBlob(speech);
    const audioBuffer = Buffer.from(audioData, 'base64');
    await RNFS.writeFile(filePath, audioBuffer);
    console.log(`Speech saved to ${filePath}`);
  } catch (error) {
    console.log('Error saving speech:', error);
  }
};

const Sentence = (props) => {

  useEffect(() => {
    TTS.initTTS();
  }, []);

  const handleCopyClick = () => {
    Clipboard.setString(props.text);
    Alert.alert('Copy thành công vào clipboard');
  };

  const handleSpeakButtonClick = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        console.log("network is connected");
        TTS.Tts.speak(props.text);

        const currentTimestamp = new Date().getTime();
        const fileName = `tts_${currentTimestamp}_${props.id}.mp3`;
        let filePath;
        if (props.audioPath && RNFS.exists(props.audioPath)) {
          filePath = props.audioPath;
        } else {
          filePath = RNFS.DocumentDirectoryPath + '/' + fileName;
        }

        saveSpeechToFile(filePath, props.text);
      } else {
        console.log("network is not connected");
        if (props.audioPath) {
          RNFS.exists(props.audioPath)
            .then((exists) => {
              if (exists) {
                TTS.Tts.playSavedAudio(props.audioPath);
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
    });
  }
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