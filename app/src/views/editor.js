import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';

import COLOR from '../constants/color';
import BaseFrame from '../components/common/base-frame';
import SuggestionBox from '../components/editor-screen/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Editor(props) {

  const navigation = useNavigation();
  const [sentences, setSentences] = useState([]);

  const [baseFramePaddingTop, setBaseFramePaddingTop] = useState('30%');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setIsKeyboardVisible(true);
        const { height } = event.endCoordinates;
        setBaseFramePaddingTop(0);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
        setBaseFramePaddingTop('30%');
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSave = (sentence) => {
    if (sentence !== '') {
      setSentences([sentence, ...sentences]);
    }
    console.log(sentences);
  };

  const handleViewHistory = () => {
    navigation.navigate('HistoryScreen', { sentences });
  };

  const handleViewPopularSentences = () => {
    navigation.navigate('PopularSentencesScreen');
  };

  return (
    <View style={[styles.container, { paddingTop: baseFramePaddingTop }]}>
      <BaseFrame
        onSpeakButtonClick={handleSave}
        onViewHistoryClick={handleViewHistory}
        onViewPopularSentencesClick={handleViewPopularSentences}
      />
      <SuggestionBox />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },
  contentContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
  },
  paragraph: {
    flex: 9,
  },
  suggestionbox: {
    flex: 1,
  }
});