import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type IdType = string | number;

export type ButtonType = {
    id ?: IdType;
    content: React.FC | JSX.Element;
}

export type LayoutInfoType = {
  left: number,
  width: number,
  height: number,
}

export interface ButtonGroupProps {
  buttonList: ButtonType[];
  Component?: typeof React.Component;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  selectedStyle?: StyleProp<ViewStyle>;
  disableStyle ?: StyleProp<ViewStyle>;
  onPress ?(value: IdType): void;
  selectedId ?: IdType;
}
