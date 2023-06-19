import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style'

const SuggestionBox = (props) => {

  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('darkMode').then(storedDarkMode => {
      if (storedDarkMode !== null) {
        setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
      }
    });
    console.log("history screen" + darkMode);
  }, []);


  return (
    <View style={[styles.container, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
        <View style={styles.textbox}>
            <Text style={styles.text}>Xin chào</Text>
        </View>
        <View style={styles.textbox}>
            <Text style={styles.text}>Xin lỗi</Text>
        </View>
        <View style={styles.textbox}>
            <Text style={styles.text}>Xinh</Text>
        </View>
    </View>
  )
}

export default SuggestionBox;