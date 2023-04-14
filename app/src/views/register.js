import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../components/register/style'
import Header from '../components/register/Header'
import UserInput from '../components/register/UserInput'
import RegisterButton from '../components/register/RegisterButton'

export default function Register() {
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
