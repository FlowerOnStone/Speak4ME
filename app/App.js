import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native'
import { Icon } from './src/components/icons/icon-tag';
import moreOptionIcon from './src/components/icons/more-options-icon';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import color from './src/constants/color';
import screens from './screens';
import LoginScreen from './src/views/LoginScreen';
import RegisterScreen from './src/views/RegisterScreen';
import HomeScreen from './src/views/HomeScreen';
import Header from './src/components/register/Header'

const Stack = createStackNavigator();

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

const styles = StyleSheet.create({
    iconBox: {
      marginRight: 10,
    },
});

export default App;