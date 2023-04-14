/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Icon from './src/components/icons/icon-tag';
import binIcon from './src/components/icons/bin-icon';

export default function MyComponent() {
  return (
  <View>
    <View style={{flexDirection: 'row'}}>
        <Icon icon={binIcon} containerStyle={{backgroundColor:'blue'}} />
        <View style={{flexDirection: 'column'}}>
            <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 0.5}}/>
            <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 0.5}}/>
        </View>
    </View>
      <View style={{flexDirection: 'row'}}>
          <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 1}}/>
          <Icon icon={binIcon} containerStyle={{backgroundColor:'yellow'}} iconStyle={{scale: 1}}/>
      </View>
  </View>
  );
}
