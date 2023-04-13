// In App.js in a new project

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import History from './src/views/history';
import Editor from './src/views/editor';
import screens from './screens';
import COLOR from './src/constants/color';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLOR.TITLE,
          },
          headerTintColor: COLOR.TEXT,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center'
        }}
      >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
