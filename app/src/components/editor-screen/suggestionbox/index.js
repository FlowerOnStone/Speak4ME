import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'

const SuggestionBox = (props) => {
  return (
    <View style={styles.container}>
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