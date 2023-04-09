import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

export class Setting extends Component {
  render() {
    return (
        <TouchableOpacity>
            <View>
                <Icon name="cog" color="#000000" type = "solid" style = {styles.setting}/>
            </View>
        </TouchableOpacity>
    )
  }
}

export default Setting;
