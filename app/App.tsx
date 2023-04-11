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
import color from './src/constants/color';

function HistoryScreen() {
  return (
    <History />
  );
}

function EditorScreen() {
  return (
    <Editor />
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: color.title,
          },
          headerTintColor: color.text,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="Editor"
          component={EditorScreen}
          options={{ title: 'Soạn thảo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
