/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';

const TopBox = (props) => {
    // console.log(props);
    return (
        <View style={{
            // borderTopLeftRadius: props.borderRadius,
            // borderTopRightRadius: props.borderRadius,
            // borderBottomLeftRadius: props.borderRadius,
            borderBottomRightRadius: 0,
            alignItems: 'center',
            ...props,
        }}
        >
            {props.children}
            <View style={{
                backgroundColor: props.backgroundColor,
                width: props.bottomBoxWidth + props.borderRadius - 2 * props.borderWidth,
                // width: props.borderRadius,
                height: props.borderWidth + 1,
                position: 'absolute',
                bottom: -props.borderWidth,
                right: 0,
                // backgroundColor: 'purple',
            }} />
        </View>
    );
};

export default TopBox;
