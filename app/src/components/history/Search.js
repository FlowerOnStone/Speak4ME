import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';

export class Search extends Component {
  render() {
    return (
      <View style= {styles.searchContainer}>
        <TextInput style= {styles.search}>
          <Icon name="search" color="#000000" type = "solid" size={25} style= {styles.iconSearch} />
          <Text style= {styles.textSearch}>
            {' Tìm kiếm'}
          </Text>
        </TextInput>
      </View>
    )
  }
}

export default Search;
