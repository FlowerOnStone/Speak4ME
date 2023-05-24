import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN } from '../../constants/screen';
import Editor from './editor';
import History from './history';
import HomeScreen from '.';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/core/src/types';
import { ParamListBase } from '@react-navigation/native';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import { log } from '../../utils/logger';
import THEME from '../../constants/theme';
import TopicNavigator from './topic/navigator';
import PopularSentencesNavigator from './popular-sentences/navigator';
import { Platform } from 'react-native';
import InfoNavigator from './info/navigator';
const screenOptions = ({
    route,
}: {
    route: RouteProp<ParamListBase>;
}): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: Platform.OS === 'ios',
    // tabBarStyle: {position: 'absolute'},
    tabBarIcon: ({ focused, color }) => {
        let iconName;
        switch (route.name) {
            case SCREEN.HOME:
                iconName = 'home';
                break;
            case SCREEN.EDITOR:
                iconName = 'edit';
                break;
            case SCREEN.HISTORY:
                iconName = 'history';
                break;
            case SCREEN.POPULAR_SENTENCES_NAVIGATOR:
                iconName = 'comments';
                break;
            case SCREEN.TOPIC_NAVIGATOR:
                iconName = 'comment-alt';
                break;
            case SCREEN.INFO_NAVIGATOR:
                iconName = 'none';
                break;
            default:
                iconName = 'home';
                log.error(`Has no ${route.name} in home navigator`);
                break;
        }

        // You can return any component that you like here!
        return <RNVIcon name={iconName} size={THEME.FONT_SIZE_LARGE} color={color} solid={focused} />;
    },
    tabBarActiveTintColor: THEME.ACTIVE_COLOR,
    tabBarInactiveTintColor: THEME.STRONG_DISABLE_COLOR,
});

const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName={SCREEN.HOME}>
            <Tab.Screen name={SCREEN.HOME} component={HomeScreen} />
            <Tab.Screen name={SCREEN.EDITOR} component={Editor} />
            <Tab.Screen name={SCREEN.HISTORY} component={History} />
            <Tab.Screen name={SCREEN.POPULAR_SENTENCES_NAVIGATOR} component={PopularSentencesNavigator} />
            <Tab.Screen name={SCREEN.TOPIC_NAVIGATOR} component={TopicNavigator} />
            <Tab.Screen name={SCREEN.INFO_NAVIGATOR} component={InfoNavigator} options={{tabBarButton: () => null}}/>
        </Tab.Navigator>
    );
};

export default HomeNavigator;
