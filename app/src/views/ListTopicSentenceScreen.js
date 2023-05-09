/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import { SearchBar } from 'react-native-elements';
import Sentence from '../components/common/sentence';
import COLOR from '../constants/color';
import plusIcon from '../components/icons/plus-icon';
import Icon from '../components/icons/icon-tag';

export default function ListTopicSentence({ route, navigation }) {

  const { sentences = [] } = route.params ?? {};

  console.log(sentences);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (text) => {
    setSearchText(text); // Lưu trữ giá trị của thanh tìm kiếm khi người dùng nhập vào
    // Thực hiện hoạt động tìm kiếm dựa trên searchText ở đây
  };

  navigation.setOptions({
    title: route.params.name,
  });

  const handleAddSentence = () => {
    navigation.navigate("AddSentenceScreen");
  }

  const handleEditSentence = () => {
    navigation.navigate("EditSentenceScreen");
  }

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
        inputStyle={styles.searchBarTextInput}
        placeholder="Tìm kiếm..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scroll}>
          { 
            sentences.length > 0 && sentences.map((sentence, index) => (
              <Sentence  onEdit={handleEditSentence} text={sentence} />
            ))}
        </ScrollView>
      </View>
      <View style={styles.addBox}>
          <TouchableOpacity style={styles.iconBox} onPress={handleAddSentence}>
              <Icon icon={plusIcon} iconStyle={{scale: 2, color: COLOR.TITLE}} />
          </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    alignItems: 'center',
  },
  contentContainer: {
    color: COLOR.BACKGROUND,
    height: '85%',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center', 
    display: 'flex'
  },
  scroll: {
    display: 'flex',
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
  },
  searchBar: {
    backgroundColor: '#fff', // Màu nền của thanh tìm kiếm
    width: "90%",
    borderRadius: 35,
    borderWidth: 2,
    margin: 10
  },
  searchBarInput: {
    backgroundColor: '#f2f2f2', // Màu nền của input trong thanh tìm kiếm
    borderRadius: 30,
  },
  searchBarTextInput: {
    fontSize: 16, // Kích thước chữ trong input của thanh tìm kiếm
  },
  addBox: {
    height: '3%',
    width: '100%',
    paddingBottom: '5%',
    borderColor: COLOR.TITLE,
    alignItems: 'flex-end',
    paddingRight: '10%',
  },

  iconBox: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'flex-end',
  },
});