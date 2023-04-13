import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './style'
import Header from './Header'
import UserInput from './UserInput'
import LoginButton from './LoginButton'

export class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Header>

            </Header>
            <UserInput>
              
            </UserInput>
            <Text style= {styles.forgotPassword}>
              *Quên mật khẩu? Nhấn vào đây
            </Text>
            <LoginButton>

            </LoginButton>
        </View>
    )
  }
}

export default Home;
