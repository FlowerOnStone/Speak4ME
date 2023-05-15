/* eslint-disable react-native/no-inline-styles */
import { View, Text, Touchable } from 'react-native';
import React from 'react';
import { useState } from 'react';

const BottomBox = (props) => {
    let inside = [];
    for (let i = 1; i <= 3; ++i) { inside.push(<Text>{i + 1}</Text>); }
    const [boxHeight, setBoxHeight] = useState(0);
    const updateBoxHeight = (event) => {
        setBoxHeight(event.nativeEvent.layout.height);
    };
    return (
        <View onLayout={updateBoxHeight} style={{
            minWidth: '20%',
            width: 'auto',
            minHeight: props.borderRadius * 4,
            height: 'auto',
            paddingTop: 10,
            paddingBottom: 10,
            borderWidth: props.borderWidth,
            borderBottomColor: props.borderColor,
            borderRightColor: props.borderColor,
            borderBottomLeftRadius: props.borderRadius,
            borderBottomRightRadius: props.borderRadius,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopColor: props.backgroundColor,
            marginTop: -boxHeight / 2,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            ...props,
        }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    typeof props.itemList === 'undefined' ?
                        null :
                        props.itemList.map((Item, idx) => {
                            return (
                                <View key={idx} style={{ marginRight: 10, marginLeft: 10 }}>
                                    {typeof Item === 'function' ? <Item /> : Item}
                                </View>
                            );
                        })
                }
            </View>
            <View style={{
                position: 'absolute',
                left: -props.borderWidth - 1,
                top: -props.borderWidth,
                width: props.borderWidth + 1,
                height: boxHeight / 2 + props.borderRadius - props.borderWidth,
                backgroundColor: props.backgroundColor,
            }} />
            <View style={{
                width: props.borderWidth,
                height: props.borderWidth * 2,
                backgroundColor: props.borderColor,
                position: 'absolute',
                top: -props.borderWidth,
                right: -props.borderWidth,
            }} />
        </View>
    );
};

export default BottomBox;
