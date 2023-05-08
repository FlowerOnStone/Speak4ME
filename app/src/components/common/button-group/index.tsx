import { StyleSheet, View, TouchableWithoutFeedback, LayoutChangeEvent } from 'react-native';
import React, { useState, useEffect } from 'react';
import THEME from '../../../constants/theme';
import toJSX from '../../../utils/convert-to-jsx';
import {ButtonGroupProps, IdType, LayoutInfoType} from './types';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttonList,
  Component = TouchableWithoutFeedback,
  containerStyle,
  buttonStyle,
  selectedStyle,
  disableStyle,
  onPress,
  selectedId,
}: ButtonGroupProps) => {
  const [groupLayout] = useState<Record<IdType, LayoutInfoType>>({});
  const leftAnim = useSharedValue(-1);
  const widthAnim = useSharedValue(-1);
  const heightAnim = useSharedValue(-1);
  const animStyle = useAnimatedStyle(() => {
    return {
      left: leftAnim.value,
      width: widthAnim.value,
      height: heightAnim.value,
    };
  });
  useEffect(() => {
    if (selectedId !== undefined && groupLayout[selectedId] !== undefined) {
      leftAnim.value = withSpring(groupLayout[selectedId].left, {
        // duration: 250,
        // stiffness: 50,
        damping: 15,
      });
      widthAnim.value = withSpring(groupLayout[selectedId].width);
      heightAnim.value = withSpring(groupLayout[selectedId].height);
    }
  }, [groupLayout, heightAnim, leftAnim, selectedId, widthAnim]);

  const handleButtonLayout = (id: IdType, event: LayoutChangeEvent): void => {
    const {x: left, width, height} = event.nativeEvent.layout;
    if (id === selectedId) {
      leftAnim.value = left;
      widthAnim.value = width;
      heightAnim.value = height;
    }
    groupLayout[id] = {
      left,
      width,
      height,
    };
  };

  return (
    <View style={[styles.container, containerStyle]}>
      { <Animated.View style={[styles.selected, selectedStyle, animStyle]}/>}
        {
          buttonList.map((Item, idx) => {
            const id = Item.id ?? idx;
            return (
              <View
                key={id}
                style={[styles.button, buttonStyle,
                        ...(id === selectedId ? [] : [styles.disable, disableStyle])]}
                onLayout={(event) => handleButtonLayout(id, event)}
              >
                <Component onPress={() => {onPress?.(id);}}>
                  {toJSX(Item.content)}
                </Component>
              </View>
            );
          })
        }
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.DISABLE_COLOR,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
  },
  button: {
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
    position: 'relative',
    zIndex: 2,
    paddingVertical: 2,
    // backgroundColor: 'yellow',
    // borderRightWidth: 5,
  },
  disable: {
    // backgroundColor: THEME.DISABLE_COLOR,
  },
  selected: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: THEME.TITLE_COLOR,
    // borderRadius: 10,
  },
});
