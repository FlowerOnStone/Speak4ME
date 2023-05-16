import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from '../../../constants/screen';
import PopularSentences from '.';
import AddPopularTopic from './add-popular-topic';
import ListTopicSentenceNavigator from './list-topic-sentence/navigator';

const Stack = createStackNavigator();

const PopularSentencesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.POPULAR_SENTENCES} component={PopularSentences}/>
        <Stack.Screen name={SCREEN.ADD_POPULAR_TOPIC} component={AddPopularTopic}/>
        <Stack.Screen name={SCREEN.LIST_TOPIC_SENTENCE_NAVIGATOR} component={ListTopicSentenceNavigator}/>
    </Stack.Navigator>
  );
};

export default PopularSentencesNavigator;
