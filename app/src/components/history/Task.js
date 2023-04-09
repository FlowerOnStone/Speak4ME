import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style';
import Search from './Search';

export class Task extends Component {
  render() {
    return (
        <SafeAreaView>
            <View style = {styles.body}>
                <Search>
                    
                </Search>
            </View>
        </SafeAreaView>
    )
  }
}

export default Task;
