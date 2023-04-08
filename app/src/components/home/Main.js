import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './style'
import Task from './Task'
import Header from './Header'

export class Main extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Header>

            </Header>
            <Task>

            </Task>
        </View>
    )
  }
}

export default Main;
