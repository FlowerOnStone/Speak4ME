import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style'
import { Icon } from '../icons/icon-tag'
import historyIcon from '../icons/history-icon'

const Paragraph = (props) => {
    const { onPress } = props;
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
                    <View style={styles.cycleBox} />
                </View>
                <TouchableOpacity style={styles.iconBox} onPress={onPress}>
                    <Icon icon={historyIcon}/>
                </TouchableOpacity>
                <View style={styles.iconBox}></View>
                <View style={styles.iconBox}></View>
            </View>
        </View>
    </View>
  )
}

export default Paragraph;