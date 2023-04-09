import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './style'
import Setting from './Setting'
import Back from './Back'

export class Header extends Component {
  render() {
    return (
        <View style = {styles.header}>
            <Back>
              
            </Back>
            <Text style={styles.textHeader}>
              Soạn thảo
            </Text>
            <Setting>
                
            </Setting>
        </View>
    )
  }
}

export default Header;
