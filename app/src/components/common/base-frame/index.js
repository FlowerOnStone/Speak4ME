/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BASE_FRAME from '../../../constants/base-frame';
import TopBox from './sub-component/top-box';
import Curve from './sub-component/curve';
import BottomBox from './sub-component/bottom-box';
import { log } from '../../../utils/logger';
import AsyncStorage from '@react-native-async-storage/async-storage';


const styles = StyleSheet.create({
    defaultContainerStyle: {
        width: BASE_FRAME.FRAME_WIDTH,
        height: BASE_FRAME.FRAME_HEIGHT,
        backgroundColor: BASE_FRAME.BACKGROUND_COLOR,
        marginVertical: 10,
    },
    defaultFrameStyle: {
        borderWidth: BASE_FRAME.BORDER_WIDTH,
        borderRadius: BASE_FRAME.BORDER_RADIUS,
        backgroundColor: BASE_FRAME.FRAME_COLOR,
        borderColor: BASE_FRAME.BORDER_COLOR,
    },
    defaultTopBoxStyle: {
        padding: 20,
        width: '100%',
        height: 'auto',
        minHeight: 50,
        position: 'relative',
    },
    defaultCurveStyle: {
        position: 'relative',
    },
    defaultBottomBoxStyle: {

    },

});

/**
 *
 * @param {
 *            style containerStyle: style for container
 *            style topBoxStyle: style for TopBox
 *            style bottomBoxStyle: style for BottomBox
 *            style curveStyle: style for Curve
 *            style frameStyle: style for Frame, param is similar to defaultFrameStyle
 *            [] itemList: list of item will appear in bottom box
 *        } props
 * Ex:
 * <BaseFrame itemList={[<Icon icon={binIcon}/>, <Icon icon={plusIcon}/>, <Icon icon={moreOptionIcon}/>, <Icon icon={moreOptionIcon} iconStyle={{scale: 8, color: 'aqua'}}/>]}>
      <View style={{position:'relative', width: 300, height: 100, borderWidth: 10}}/>
   </BaseFrame>
 * @returns BaseFrame
 */
const BaseFrame = (props) => {
    
	const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
      AsyncStorage.getItem('darkMode').then(storedDarkMode => {
        if (storedDarkMode !== null) {
          setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
        }
      });
      console.log("history screen" + darkMode);
    }, []);
    
    const containerStyle = StyleSheet.flatten([styles.defaultContainerStyle, props.containerStyle]);
    const frameStyle = StyleSheet.flatten([styles.defaultFrameStyle, props.frameStyle]);
    const baseBoxStyle = StyleSheet.create({
        borderWidth: frameStyle.borderWidth,
        borderRadius: frameStyle.borderRadius,
        backgroundColor: frameStyle.backgroundColor,
        borderColor: frameStyle.borderColor,
    });
    const curveStyle = StyleSheet.flatten([styles.defaultCurveStyle, baseBoxStyle,
    { backgroundColor: darkMode === true ? "black" : "white", borderColor: darkMode === true ? "black" : "white" },
    props.curveStyle]);
    const bottomBoxStyle = StyleSheet.flatten([styles.defaultBottomBoxStyle, baseBoxStyle, props.bottomBoxStyle]);
    const topBoxStyle = StyleSheet.flatten([styles.defaultTopBoxStyle, baseBoxStyle, props.topBoxStyle]);

    const [bottomBoxWidth, setBottomBoxWidth] = useState(0);
    const [bottomBoxHeight, setBottomBoxHeight] = useState(0);

    const updateBottomBoxLayout = (event) => {
        // log.debug(`width ${bottomBoxWidth}`)
        // log.debug(`height ${bottomBoxHeight}`)
        // log.debug(`layout width ${event.nativeEvent.layout.width}`);
        // log.debug(`layout height ${event.nativeEvent.layout.height}`);
        if (bottomBoxWidth === 0 || bottomBoxHeight === 0) {
            setBottomBoxWidth(event.nativeEvent.layout.width);
            setBottomBoxHeight(event.nativeEvent.layout.height);
        }
    };

    return (
        <View style={{ ...containerStyle, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <TopBox {...topBoxStyle}
                bottomBoxWidth={bottomBoxWidth}
                position="relative"
                zIndex={10}
                paddingBottom={bottomBoxHeight / 2}
            >
                {props.children}
            </TopBox>
            <View style={{ position: 'relative', zIndex: 100 }}>
                <Curve {...curveStyle} />
            </View>
            <View onLayout={updateBottomBoxLayout} style={{ position: 'relative', zIndex: 50 }}>
                <BottomBox {...bottomBoxStyle} itemList={props.itemList} />
            </View>
            <View style={{
                position: 'absolute',
                zIndex: 0,
                right: bottomBoxWidth - 7,
                bottom: bottomBoxHeight / 2 - frameStyle.borderRadius,
                borderWidth: 7,
                borderRightWidth: 9,
                borderTopWidth: 9,
                borderTopRightRadius: frameStyle.borderRadius,
                borderColor: frameStyle.backgroundColor,
                width: frameStyle.borderRadius + 7,
                height: frameStyle.borderRadius + 7,
            }} />
        </View>
    );
};

export default BaseFrame;
