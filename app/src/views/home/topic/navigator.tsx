import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../../constants/screen';
import TopicScreen from '.';
import AddTopic from './add-topic';
import EditTopic from './edit-topic';

const Stack = createStackNavigator();

const TopicNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.TOPIC} component={TopicScreen} />
        <Stack.Screen name={SCREEN.ADD_TOPIC} component={AddTopic} />
        <Stack.Screen name={SCREEN.EDIT_TOPIC} component={EditTopic} />
    </Stack.Navigator>
  );
};

export default TopicNavigator;
