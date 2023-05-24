import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../../constants/screen';
import AccountInfoScreen from '.';
import ChangeInfoScreen from './change-info';
import ChangePasswordScreen from './change-password';

const Stack = createStackNavigator();

const InfoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.INFO} component={AccountInfoScreen} />
      <Stack.Screen name={SCREEN.CHANGE_INFO} component={ChangeInfoScreen} />
      <Stack.Screen name={SCREEN.CHANGE_PASSWORD} component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default InfoNavigator;
