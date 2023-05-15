/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useState, useEffect } from 'react';

import styles from './style';
import Icon from '../../icons/icon-tag';
import editIcon from '../../icons/edit-icon';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';
import binIcon from '../../icons/bin-icon';
import plusIcon from '../../icons/plus-icon';
import moreOptionsIcon from '../../icons/more-options-icon';
import TTS from '../../../utils/TTS';
import BaseFrame from '../../common/base-frame';
import { log } from '../../../utils/logger';

const padding = 20;

const PopularTopic = (props) => {
  // log.debug('re render');
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
    <BaseFrame itemList={[
      <TouchableOpacity style={styles.iconBox} onPress={props.onDelete}>
        <Icon icon={binIcon} />
      </TouchableOpacity>,
      <TouchableOpacity style={styles.iconBox}>
        <Icon icon={plusIcon} />
      </TouchableOpacity>,
      <TouchableOpacity style={styles.iconBox}>
        <Icon icon={moreOptionsIcon} />
      </TouchableOpacity>,
    ]}
      topBoxStyle={{padding: 0}}
    >
      <TouchableOpacity onPress={props.onTouch} style={{ width: '100%' }}>
        <View style={[styles.topicContainer, {paddingTop: 20, paddingHorizontal: 20}]}>
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
              <Icon icon={editIcon} iconStyle={{scale: 0.8}}/>
            </TouchableOpacity>
          )}
        </View>
        {sentences && sentences.map((sentence, index) => (
            <View style={styles.sentenceContainer} key={index}>
              <View style={[styles.sentence, {paddingLeft: padding}]}>
                <Text style={styles.sentenceText}>{sentence}</Text>
              </View>
              <TouchableOpacity style={{paddingRight: 15}} onPress={() => handleSpeakButtonClick(sentence)}>
                <Icon icon={speakIcon} iconStyle={{scale: 0.85}}/>
              </TouchableOpacity>
              <TouchableOpacity style={[{paddingRight: padding}]} onPress={handleCopyClick}>
                <Icon icon={copyIcon} iconStyle={{scale: 0.85}}/>
              </TouchableOpacity>
            </View>
        ))}
      </TouchableOpacity>
    </BaseFrame>
  );
};


export default PopularTopic;
