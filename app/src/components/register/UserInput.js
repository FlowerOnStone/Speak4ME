import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';

export class UserInput extends Component {
  render() {
    return (
        <View style= {styles.inputContainer}>
            <TextInput style= {styles.inputBox}>
                {/* <Icon name="search" color="#000000" type = "solid" size={25} style= {styles.iconSearch} /> */}
                <Text style= {styles.inputText}>
                    {'  Họ và tên'}
                </Text>
            </TextInput>
            <TextInput style= {styles.inputBox}>
                {/* <Icon name="search" color="#000000" type = "solid" size={25} style= {styles.iconSearch} /> */}
                <Text style= {styles.inputText}>
                    {'  Tên đăng nhập'}
                </Text>
            </TextInput>
            <TextInput style= {styles.inputBox}>
                {/* <Icon name="search" color="#000000" type = "solid" size={25} style= {styles.iconSearch} /> */}
                <Text style= {styles.inputText}>
                    {'  Mật khẩu'}
                </Text>
            </TextInput>
            <TextInput style= {styles.inputBox}>
                {/* <Icon name="search" color="#000000" type = "solid" size={25} style= {styles.iconSearch} /> */}
                <Text style= {styles.inputText}>
                    {'  Nhập lại mật khẩu'}
                </Text>
            </TextInput>
            <TextInput style= {styles.inputBox}>
                {/* <Icon name="search" color="#000000" type = "solid" size={25} style= {styles.iconSearch} /> */}
                <Text style= {styles.inputText}>
                    {'  Email'}
                </Text>
            </TextInput>
        </View>
    )
  }
}

export default UserInput
