import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DICTIONARY from '../../../constants/dictionary'

const SuggestionBox = (props) => {
  const lastSpace = (text) => {
    for (let i = text.length - 1; i >= 0; i--) {
      if (text[i] == ' ') {
        return i;
      }
    }
    return -1;
  }
  const handlePress = (text) => {
    data = props.data;
    if (data == "" || data[data.length - 1] == " ") {
      props.change(data + text + " ");
    } else {
      while (data[data.length - 1] != " ") {
        data = data.substring(0, data.length - 1);
      }
      props.change(data.substring(0, lastSpace(data) + 1) + text + " ");
    }
    console.log(props.data);
  };
  suggestionWord = []
  if (props.data.length == 0) {
    suggestionWord = ["Xin", "Tôi", "Bạn"];
  } else if (props.data[props.data.length - 1] == ' '){
    suggestionWord = ["và", "là", "hoặc"];
  } else {
    suggestionWord = [];
    let lastWord = props.data.substring(lastSpace(props.data) + 1, props.data.length);
    for (let word in DICTIONARY) {
      if (DICTIONARY[word].startsWith(lastWord)) {
        suggestionWord.push(DICTIONARY[word]);
      }
      if (suggestionWord.length == 3) {
        break;
      }
    }
  }
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.textbox} onPress={() => handlePress(suggestionWord[0])}>
            <Text style={styles.text}>{suggestionWord[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textbox} onPress={() => handlePress(suggestionWord[1])}>
            <Text style={styles.text}>{suggestionWord[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textbox} onPress={() => handlePress(suggestionWord[2])}>
            <Text style={styles.text}>{suggestionWord[2]}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SuggestionBox;