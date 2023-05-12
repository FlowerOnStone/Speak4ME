import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type ItemType = React.FC;

export interface ScreenHeaderProps {
    title: string | React.FC;
    titleContainerStyle: StyleProp<ViewStyle>;
    leftItem?: ItemType;
    leftItemContainerStyle?: StyleProp<ViewStyle>;
    rightItem?: ItemType;
    rightItemContainerStyle?:StyleProp<ViewStyle>;
    headerStyle?: StyleProp<ViewStyle>;
}
