import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../constants/screen';
import LoginScreen from '.';

import ForgotPasswordNavigator from './forgotPassword/navigator';
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen}/>
      <Stack.Screen name={SCREEN.FORGOT_PASSWORD_NAVIGATOR} component={ForgotPasswordNavigator}/>
    </Stack.Navigator>
  );
};

export default LoginNavigator;
