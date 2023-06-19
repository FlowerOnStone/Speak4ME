import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import Task from './Task';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const History = () => {
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
      <Header />
      <Task />
    </View>
  );
};

export default History;