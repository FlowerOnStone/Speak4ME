import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../../constants/screen';
import ForgotPasswordScreen from '.';
import SetNewPasswordScreen from './new-password';
import VerificationForgotPasswordScreen from './varification';

const Stack = createStackNavigator();

const ForgotPasswordNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.FORGOT_PASSWORD} component={ForgotPasswordScreen}/>
      <Stack.Screen name={SCREEN.SET_NEW_PASSWORD} component={SetNewPasswordScreen}/>
      <Stack.Screen name={SCREEN.VERIFY_FORGOT_PASSWORD} component={VerificationForgotPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default ForgotPasswordNavigator;
