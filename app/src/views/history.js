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
} from 'react-native';

import { SearchBar } from 'react-native-elements';


import COLOR from '../constants/color';
import Sentence from '../components/common/sentence';

export default function History({ route, navigation }) {

  const { sentences } = route.params;

  console.log(sentences);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (text) => {
    setSearchText(text); // Lưu trữ giá trị của thanh tìm kiếm khi người dùng nhập vào
    // Thực hiện hoạt động tìm kiếm dựa trên searchText ở đây
  };



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
        <ScrollView>
          { 
            sentences.map((sentence, index) => (
              <Sentence key={index} text={sentence} />
            ))}
        </ScrollView>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLOR.BACKGROUND,
  },
  contentContainer: {
    color: COLOR.BACKGROUND,
    height: '100%',
  },
  searchBar: {
    backgroundColor: '#fff', // Màu nền của thanh tìm kiếm
  },
  searchBarInput: {
    backgroundColor: '#f2f2f2', // Màu nền của input trong thanh tìm kiếm
  },
  searchBarTextInput: {
    fontSize: 16, // Kích thước chữ trong input của thanh tìm kiếm
  },
});
