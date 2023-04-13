import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

export class Task extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style= {styles.body}>
            <TouchableOpacity>
                <View style= {styles.button}>
                    <Text style= {styles.textButton}>
                        {'Đăng nhập'}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style= {styles.button}>
                    <Text style= {styles.textButton}>
                        {'Đăng ký'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default Task
