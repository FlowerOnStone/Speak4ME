/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';

const Curve = (props) => (
    <View style={{ position: 'relative' }}>
        <View style={{
            width: props.borderRadius + 2,
            height: props.borderRadius + 2,
            borderWidth: props.borderWidth,
            borderTopRightRadius: props.borderRadius,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopColor: props.borderColor,
            borderRightColor: props.borderColor,
            borderBottomColor: props.borderColor,
            backgroundColor: props.backgroundColor,
            marginTop: -props.borderWidth,
            marginRight: -props.borderWidth,
            ...props,
        }}
        >

            <View style={{
                width: props.borderWidth + 1,
                height: props.borderRadius,
                backgroundColor: props.backgroundColor,
                position: 'absolute',
                // top: BORDER_WIDTH,
                left: -props.borderWidth,
            }} />
            <View style={{
                width: props.borderRadius + 1,
                height: props.borderWidth + 1,
                backgroundColor: props.backgroundColor,
                position: 'absolute',
                bottom: -props.borderWidth,
                right: 0,
            }} />
        </View>

    </View>
);

export default Curve;
