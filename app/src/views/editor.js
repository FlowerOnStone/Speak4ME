/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import color from '../constants/color';
import Paragraph from '../components/paragraph';
import SuggestionBox from '../components/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import screens from '../../screens';

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

  const handleViewCommon = () => {
    navigation.navigate('CommonScreen');
  };

  return (
    <View style={styles.container}>
        <Paragraph 
          onSpeakButtonClick={handleSave} 
          onViewHistoryClick={handleViewHistory}
          onViewCommonClick={handleViewCommon}
        />
        <SuggestionBox />        
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
  },
  paragraph : {
    flex: 10,
  },
  suggestionbox : {
    flex: 1,
  }
})