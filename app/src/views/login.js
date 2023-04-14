import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../components/login/style'
import Header from '../components/login/Header'
import UserInput from '../components/login/UserInput'
import LoginButton from '../components/login/LoginButton'

export default function Login() {
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

