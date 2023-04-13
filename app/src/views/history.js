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
import Sentence from '../components/sentence';

export default function History() {

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <View style={styles.searchIconContainer}></View>
          <View style={styles.searchTextContainer}>
            <Text>Tìm kiếm</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>
          <Sentence text={'xin chào'}></Sentence>
          <Sentence text={'Bạn khỏe k'}></Sentence>
          <Sentence text={'abcdègh'}></Sentence>
        </ScrollView>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: color.background,
  },
  titleContainer : {
    flex: 1,
    backgroundColor: color.title,
    flexDirection: 'row',
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '1%',
  },
  contentContainer: {
    flex: 8,
    backgroundColor: color.background,
  },
  backButtonContainer: {
    flex: 1,
    backgroundColor: color.lightText,
  },
  settingButtonContainer: {
    flex: 1,
    backgroundColor: color.lightText,
  },
  titleTextContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: color.text,
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchIconContainer: {
    flex: 1,
    backgroundColor: color.lightText,
    borderRadius: 20,
  },
  searchTextContainer: {
    flex: 9,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  searchBar: {
    width: '100%',
    height: '45%',
    borderColor: color.text,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
  }
})