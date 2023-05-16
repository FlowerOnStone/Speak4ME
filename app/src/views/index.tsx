import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SCREEN } from '../constants/screen';
import StartScreen from './start';
import LoginScreen from './login';
import RegisterScreen from './register';
import HomeNavigator from './home/navigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={SCREEN.START} component={StartScreen}/>
                <Stack.Screen name={SCREEN.REGISTER} component={RegisterScreen}/>
                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen}/>
                <Stack.Screen name={SCREEN.HOME_NAVIGATOR} component={HomeNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
