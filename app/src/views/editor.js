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
} from 'react-native';


import COLOR from '../constants/color';
import BaseFrame from '../components/common/base-frame';
import SuggestionBox from '../components/editor-screen/suggestionbox';

import { useNavigation } from '@react-navigation/native';

export default function Editor(props) {

  const navigation = useNavigation();
  const [sentences, setSentences] = useState([]);

  const handleSave = (sentence) => {
    // Nếu câu hiện tại không rỗng, thêm câu hiện tại vào mảng sentences
    if (sentence !== '') {
      setSentences([sentence, ...sentences]);
    }
  };

  const handleViewHistory = () => {
    navigation.navigate('HistoryScreen', { sentences });
  };

  const handleViewPopularSentences = () => {
    navigation.navigate('PopularSentencesScreen');
  };

  return (
    <View style={styles.container}>
      <BaseFrame
        onSpeakButtonClick={handleSave}
        onViewHistoryClick={handleViewHistory}
        onViewPopularSentencesClick={handleViewPopularSentences}
      />
      <SuggestionBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    alignItems: 'center',
  },
  paragraph: {
    flex: 10,
  },
  suggestionbox: {
    flex: 1,
  },
});
