import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

export class Back extends Component {
  render() {
    return (
        <TouchableOpacity>
            <View>
                <Icon name="angle-left" color="#000000" type = "solid" style = {styles.back}/>
            </View>
        </TouchableOpacity>
    )
  }
}

export default Back;
