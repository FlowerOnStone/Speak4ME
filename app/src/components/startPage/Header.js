import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './style'

export class Header extends Component {
  render() {
    return (
        <View style = {styles.header}>
            <Text style={styles.textHeader}>
              Speak4ME
            </Text>
        </View>
    )
  }
}

export default Header;
