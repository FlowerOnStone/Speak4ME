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
import Sound from 'react-native-sound';

const NetInfo = require('@react-native-community/netinfo');

const playSound = (filePath) => {
  // Create a new Sound object with the file path
  console.log("play sound saved");
  const sound = new Sound(filePath, '', (error) => {
    if (error) {
      console.log('Failed to load the sound file', error);
      return;
    }

    // Play the sound file
    sound.play((success) => {
      if (success) {
        console.log('Sound file played successfully');
      } else {
        console.log('Failed to play the sound file');
      }
    });
  });
};


const saveSpeechToFile = async (filePath, speech) => {
  try {
    const audioData = await TTS.Tts.speak(speech);
    await RNFS.writeFile(filePath, audioData);
    console.log("Saved file to " + filePath);
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
    const fileName = `tts_${props.text}.mp3`;
    let filePath = RNFS.DocumentDirectoryPath + '/' + fileName;

    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        console.log("network is connected");
        TTS.Tts.speak(props.text);

        saveSpeechToFile(filePath, props.text);
      } else {
        console.log("network is not connected " + filePath);

        if (filePath) {
          RNFS.exists(filePath)
            .then((exists) => {
              if (exists) {
                playSound(filePath);
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
    fontSize: 15
  }
});

export default Sentence;