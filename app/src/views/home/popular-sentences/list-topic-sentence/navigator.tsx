import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../../../constants/screen';
import ListTopicSentence from '.';
import AddSentence from './add-sentence';
import EditSentence from './edit-sentence';

const Stack = createStackNavigator();

const ListTopicSentenceNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.LIST_TOPIC_SENTENCE} component={ListTopicSentence}/>
        <Stack.Screen name={SCREEN.ADD_SENTENCE} component={AddSentence}/>
        <Stack.Screen name={SCREEN.EDIT_SENTENCE} component={EditSentence}/>
    </Stack.Navigator>
  );
};

export default ListTopicSentenceNavigator;
