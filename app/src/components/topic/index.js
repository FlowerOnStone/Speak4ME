import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Clipboard, Alert } from 'react-native';

import React, { useState, useEffect } from 'react'

import styles from './style';
import Icon from '../icons/icon-tag';
import editIcon from '../icons/edit-icon';
import copyIcon from '../icons/copy-icon';
import speakIcon from '../icons/speak-icon';
import binIcon from '../icons/bin-icon';
import plusIcon from '../icons/plus-icon';
import moreOptionsIcon from '../icons/more-options-icon';
import TTS from '../../utils/TTS';
import UpRightBorder from '../common/up-right-border';
import BaseFrame from '../common/base-frame';

const Topic = (props) => {
  const { title, description, sentences, onTitleBlur } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    TTS.initTTS();
  }, []);

  const handleSpeakButtonClick = (text) => {
    TTS.Tts.speak(text);
  };

  const handleCopyClick = () => {
    Clipboard.setString(props.text);
    Alert.alert('Copy thành công vào clipboard');
  };

  const handleTitleChange = (value) => {
    setNewTitle(value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
    // call onTitleBlur function if it exists
    if (onTitleBlur) {
      onTitleBlur(newTitle);
    }
  };


  return (
    <BaseFrame itemList={[
        <TouchableOpacity style={styles.iconBox} onPress={props.onEdit}>
            <Icon icon={editIcon} />
        </TouchableOpacity>,
          <TouchableOpacity style={styles.iconBox} onPress={props.onDelete}>
            <Icon icon={binIcon} />
          </TouchableOpacity>
      ]} >
      <TouchableOpacity onPress={props.onTouch}>
        <View style={styles.topicContainer}>
            <Text style={styles.topicText}>{title}</Text>
        </View>
        <View>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </TouchableOpacity>
    </BaseFrame>    
  );
}


export default Topic;
