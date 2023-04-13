import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './style'

const Paragraph = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.textBox}>  
            <TextInput placeholder='Bạn muốn nói gì...' />
        </View>
        <View style={styles.addBox}>
            <View style={styles.blankBox}>
            </View>
            <View style={styles.itemBox}>
                <View style={styles.backgroundBox}>
                    <View style={styles.cycleBox}>
                          
                    </View>
                </View>
                <View style={styles.iconBox}></View>
                <View style={styles.iconBox}></View>
                <View style={styles.iconBox}></View>
            </View>
        </View>
    </View>
  )
}

export default Paragraph;