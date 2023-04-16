import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import COLOR from './src/constants/color';
import screens from './screens';

const Stack = createStackNavigator();

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

const styles = StyleSheet.create({
    iconBox: {
      marginRight: 10,
    },
});

export default App;