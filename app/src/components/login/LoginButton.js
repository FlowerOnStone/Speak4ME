import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './style'

export class LoginButton extends Component {
  render() {
    return (
        <TouchableOpacity>
            <View style= {styles.registerContainer}>
            <   Text style= {styles.registerText}>
                    {'Đăng nhập'}
                </Text>
            </View>
        </TouchableOpacity>
    )
  }
}

export default LoginButton
