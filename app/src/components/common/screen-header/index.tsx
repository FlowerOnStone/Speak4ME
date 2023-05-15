import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenHeaderProps } from './type';
import THEME from '../../../constants/theme';
import toJSX from '../../../utils/convert-to-jsx';
import { SCREEN } from '../../../constants/screen';

const ScreenHeader = ({
    title,
    titleContainerStyle,
    leftItem,
    leftItemContainerStyle,
    rightItem,
    rightItemContainerStyle,
    headerStyle,
}: ScreenHeaderProps) => {
  return (
    <View style={[styles.header, headerStyle]}>
        <View style={[styles.leftItem, leftItemContainerStyle]}>
            {toJSX(leftItem)}
        </View>
        <View style={[styles.titleContainer, titleContainerStyle]}>
            {
                typeof title === 'string' ?
                <Text style={styles.title}>
                    {title}
                </Text>
                :
                toJSX(title)
            }
        </View>
        <View style={[styles.rightItem, rightItemContainerStyle]}>
            {toJSX(rightItem)}
        </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: SCREEN.HEIGHT * 0.07,
        backgroundColor: THEME.TITLE_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftItem: {
        position: 'absolute',
        left: 10,
    },
    rightItem: {
        position: 'absolute',
        right: 10,
    },
    title: {
        fontSize: THEME.FONT_SIZE_EXTRA_LARGE,
        color: THEME.FONT_COLOR,
        // fontWeight: 'bold',
    },
    titleContainer: {

    },
});
