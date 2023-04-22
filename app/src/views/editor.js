/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';


import COLOR from '../constants/color';
import BaseFrame from '../components/common/base-frame';
import SuggestionBox from '../components/editor-screen/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import Icon from '../components/icons/icon-tag';
import speakIcon from '../components/icons/speak-icon';
import historyIcon from '../components/icons/history-icon';
import popularSentencesIcon from '../components/icons/popular-sentences-icon';


export default function Editor(props) {

  const navigation = useNavigation();
  const [sentences, setSentences] = useState([]);
  
    const [sentence, setSentence] = useState('');
    const handleSpeakButtonClick = () => {
        if (text.length === 0) {
            alert('Bạn vui lòng nhập câu nói để phát âm thanh');
            Keyboard.dismiss();
            return false;
        }
        TTS.Tts.speak(text);
        props.onSpeakButtonClick(text);
        setText('');
        Keyboard.dismiss();
    };

    const handleChangeSentence = (newSentence) => {
      setSentence(newSentence);
      console.log(newSentence);
    };

  const handleSave = () => {
    // Nếu câu hiện tại không rỗng, thêm câu hiện tại vào mảng sentences
    if (sentence !== '') {
      setSentences([sentence, ...sentences]);
    }
    console.log(sentence);
  };
  const handleViewHistory = () => {
    navigation.navigate('HistoryScreen', { sentences });
  };

  const handleViewPopularSentences = () => {
    navigation.navigate('PopularSentencesScreen');
  };

  return (
    <View style={styles.container}>
      <BaseFrame itemList={[<TouchableOpacity onPress={handleViewPopularSentences}>
        <Icon icon={popularSentencesIcon} />
      </TouchableOpacity>, <TouchableOpacity onPress={handleViewHistory}>
        <Icon icon={historyIcon}/>
      </TouchableOpacity>,<TouchableOpacity onPress={handleSave}>
        <Icon icon={speakIcon} />
      </TouchableOpacity>]}>
       <TextInput
          onChangeText={handleChangeSentence}
          value={sentence}
          multiline={true} 
          numberOfLines={10}
          style={styles.textInput}
          placeholder="Bạn muốn nói gì..."
        />
      </BaseFrame>
      <SuggestionBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    flex: 10,
  },
  suggestionbox: {
    flex: 1,
  },
  textInput: {

    fontSize: 20,
  }
});
