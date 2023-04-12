/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

export default function Editor() {

  const navigation = useNavigation();
  const handleIconPress = () => {
    navigation.navigate('HistoryScreen');
  }

  return (
    <View style={styles.container}>
        <Paragraph onPress={handleIconPress} />
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