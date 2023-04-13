import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './style'

export class RegisterButton extends Component {
  render() {
    return (
        <TouchableOpacity>
            <View style= {styles.registerContainer}>
            <   Text style= {styles.registerText}>
                    {'Đăng ký'}
                </Text>
            </View>
        </TouchableOpacity>
    )
  }
}

export default RegisterButton
