import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Clipboard, Alert } from 'react-native';

import React, { useState, useEffect } from 'react'

import styles from './style';
import Icon from '../../icons/icon-tag';
import editIcon from '../../icons/edit-icon';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';
import binIcon from '../../icons/bin-icon';
import plusIcon from '../../icons/plus-icon';
import moreOptionsIcon from '../../icons/more-options-icon';
import TTS from '../../../utils/TTS';
import UpRightBorder from '../../common/up-right-border';


const Topic = (props) => {
  const { title, sentences, onTitleBlur } = props;
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

  const handleEdit = () => {
    setIsEditing(true);
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.textBox}>
        <View style={styles.topicContainer}>
          {isEditing ? (
            <TextInput
              style={styles.editTitle}
              value={newTitle}
              onChangeText={handleTitleChange}
              onBlur={handleTitleBlur}
              autoFocus={true}
            />
          ) : (
            <Text style={styles.topicText}>{title}</Text>
          )}
          {!isEditing && (
            <TouchableOpacity style={styles.iconBox} onPress={handleEdit}>
              <Icon icon={editIcon} />
            </TouchableOpacity>
          )}
        </View>
        {sentences && sentences.length > 0 && sentences.map((sentence, index) => (
          <View style={styles.sentenceContainer} key={index}>
            <View style={styles.sentence}>
              <Text style={styles.sentenceText}>{sentence}</Text>
            </View>
            <TouchableOpacity style={styles.iconBox} onPress={() => handleSpeakButtonClick(sentence)}>
              <Icon icon={speakIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon icon={copyIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </TouchableOpacity>
      <View style={styles.addBox}>
        <View style={styles.blankBox}></View>
        <View style={styles.itemBox}>
          <UpRightBorder />
          <TouchableOpacity style={styles.iconBox} onPress={props.onDelete}>
            <Icon icon={binIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Icon icon={plusIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Icon icon={moreOptionsIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


export default Topic;
