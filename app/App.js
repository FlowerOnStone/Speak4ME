import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import color from './src/constants/color';
import screens from './screens';
import RootNavigator from './src/views';

Text.defaultProps = {
  fontFamily: 'monospace'
}

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <RootNavigator/>
  );
};

// export {default} from './.storybook';
