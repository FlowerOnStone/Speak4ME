import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './style'
import Back from './Back'

export class Header extends Component {
  render() {
    return (
        <View style = {styles.header}>
            <Back>
              
            </Back>
            <Text style={styles.textHeader}>
              Đăng ký
            </Text>
        </View>
    )
  }
}

export default Header;
