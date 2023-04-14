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

export default function Editor() {

  return (
    <View style={styles.container}>
        <Paragraph />
        <SuggestionBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: COLOR.background,
    alignItems: 'center',
  },
  paragraph : {
    flex: 10,
  },
  suggestionbox : {
    flex: 1,
  }
})
