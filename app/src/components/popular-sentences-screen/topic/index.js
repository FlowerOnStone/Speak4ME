/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useState, useEffect } from 'react';

import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';
import TTS from '../../../utils/TTS';
import BaseFrame from '../../common/base-frame';

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
        <Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
      </TouchableOpacity>,
      <TouchableOpacity style={styles.iconBox} onPress={props.onAddSentence}>
        <Icon name="plus-circle" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
      </TouchableOpacity>
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
              <Icon name="edit" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>
          )}
        </View>
        {sentences && sentences.map((sentence, index) => (
            <View style={styles.sentenceContainer} key={index}>
              <View style={[styles.sentence, {paddingLeft: padding}]}>
                <Text style={styles.sentenceText}>{sentence.content}</Text>
              </View>
              <TouchableOpacity style={{paddingRight: 15}} onPress={() => handleSpeakButtonClick(sentence.content)}>
        				<Icon name="volume-up" color={ICON_CONSTANTS.BLACK_COLOR}  size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
              </TouchableOpacity>
              <TouchableOpacity style={[{paddingRight: padding}]} onPress={handleCopyClick}>
  	      			<Icon name="copy" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
              </TouchableOpacity>
            </View>
        ))}
      </TouchableOpacity>
    </BaseFrame>
  );
};


export default PopularTopic;
