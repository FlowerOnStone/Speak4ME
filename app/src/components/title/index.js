import { View, Text } from 'react-native'
import React from 'react'

import styles from '../title/style'

const Title = (props) => {
  return (
    <View style={styles.titleContainer}>
        <View style={styles.backButtonContainer}></View>
        <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{props.text}</Text>
        </View>
        <View style={styles.settingButtonContainer}></View>
    </View>
  )
}

export default Title;