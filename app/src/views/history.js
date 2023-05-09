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
import HistorySentence from '../components/common/historySentence';

export default function History({ route, navigation }) {

  const { sentences = [] } = route.params ?? {};

  console.log(route.params );
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
        <ScrollView style={styles.scroll}>
          { 
            sentences.length > 0 && sentences.map((sentence, index) => (
              <HistorySentence key={index} text={sentence} />
            ))}
        </ScrollView>
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
    height: '90%',
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
});
