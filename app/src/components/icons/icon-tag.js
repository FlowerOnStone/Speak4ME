import React from 'react';
import { View } from 'react-native';
export function Icon(props) {
  return (
    <View {...props}>{props.icon(props)}</View>
  );
}
