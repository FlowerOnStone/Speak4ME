import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './style'
import Setting from './Setting'

export class Header extends Component {
  render() {
    return (
        <View style = {styles.header}>
            <Text style={styles.textHeader}>
                Trang chủ
            </Text>
            <Setting>
                
            </Setting>
        </View>
    )
  }
}

export default Header;
