import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import color from './src/constants/color';
import screens from './screens';
import { LogBox } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { EventRegister } from 'react-native-event-listeners'

import theme from './src/constants/theme'
import themeContext from './src/constants/themeContext';
import { defaultTheme } from '@rneui/base';


LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createStackNavigator();

function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listeners = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
      console.log(data);
    })
    return () => {
      EventRegister.removeAllListeners(listeners)
    }
  }, [darkMode])

  useEffect(() => {
    NetInfo.configure({
      reachabilityTest: async () => {
        const response = await fetch('https://www.google.com');
        return response.status === 200;
      },
    });
  }, []);

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : defaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: color.TITLE,
            },
            headerTintColor: color.TEXT,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTitleAlign: 'center',
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
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    marginRight: 10,
  },
});

export default App;