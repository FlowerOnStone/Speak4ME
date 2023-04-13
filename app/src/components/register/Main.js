import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './style'
import Header from './Header'
import UserInput from './UserInput'
import RegisterButton from './RegisterButton'

export class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Header>

            </Header>
            <UserInput>
              
            </UserInput>
            <RegisterButton>
              
            </RegisterButton>
        </View>
    )
  }
}

export default Home;
