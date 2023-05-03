/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, Text, TouchableWithoutFeedback, Scroll, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Header from './header';
import OptionsHeader from '../options-header';
import { Overlay, ButtonGroup } from '@rneui/themed';
import CheckBoxList from '../checkbox-list';
import { log } from '../../../utils/logger';
import THEME from '../../../constants/theme';
import { colorOpacity, equalUndefined } from 'utils';
import * as Animatable from 'react-native-animatable';
import { useEvent } from 'react-native-reanimated';
import { SCREEN } from '../../../constants/screen';

const expandTextSize = THEME.FONT_SIZE_SMALL - 8;
const SELECTED_BUTTON_COLOR = colorOpacity(THEME.TITLE_COLOR, 0.8);
/**
 * structure of optionHeaderList: [{
 *                              any id: id for each option header,
 *                              optionHeaderProps: corresponding props of OptionsHeader
 *                              checkboxListProps: corresponding props of CheckboxList
 */
/**
 *
 * @param
 *      Object headerProps: like props of Header
 *      Object[] optionHeaderList: The structure is described above
 *      defaultFocusedId: first focused item's id
 *      Style containerStyle: style for container
 * @returns
 */

const beginAnim = {
    animation: {
        from: {
            translateX: -0.6 * SCREEN.WIDTH,
        },
        to: {
            translateX: 0,
        },
    },
    iterationCount: 1,
    easing: 'ease-in-out-back',
    duration: 1500,
};
const endAnim = {
    animation: {
        from: {
            translateX: 0,
        },
        to: {
            translateX: -0.6 * SCREEN.WIDTH,
        },
    },
    iterationCount: 1,
    easing: 'ease-out-back',
    duration: 1000,
};

const SettingsOverlay = ({
    isVisible = false,
    distanceToTop = 0,
    onBackdropPress = undefined,
    hasHeader = true,
    headerProps = undefined,
    optionsHeaderList = [],
    action = undefined,
    defaultFocusedId = undefined,
    containerStyle = undefined,
    children = undefined,
}) => {
    const [focusedId, setFocusedId] = useState(defaultFocusedId);
    const [expandAll, setExpandAll] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [endAnimation, setEndAnimation] = useState(!isVisible);

    const handleFocus = (optionHeaderId) => {
        setFocusedId(optionHeaderId);
    };
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                // position: 'relative',
                // zIndex: -1,
                // backgroundColor: 'yellow',
                display: !endAnimation || isVisible ? 'flex' : 'none',
                marginTop: -distanceToTop,
            }}
            {...(isVisible ? {onStartShouldSetResponder: onBackdropPress} : {})}
            // onLayout={(event) => handleLayout(event)}
        >
            <TouchableWithoutFeedback>
                <Animatable.View
                    {...(isVisible ? beginAnim : endAnim)}
                    onAnimationEnd={() => { setEndAnimation(!isVisible); }}
                    style={[styles.defaultContainerStyle, containerStyle]}
                >
                    {hasHeader && <Header {...headerProps} />}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <ButtonGroup
                            Component={TouchableWithoutFeedback}
                            buttons={[<Text style={{ fontSize: expandTextSize }}>
                                Mở rộng
                            </Text>,
                            <Text style={{ fontSize: expandTextSize }}>
                                Thu gọn
                            </Text>]}
                            selectedIndex={selectedIndex}
                            onPress={(value) => {
                                setExpandAll(value === 0);
                                setSelectedIndex(value);
                            }}
                            containerStyle={{ marginVertical: 10, borderRadius: 20, width: 140, height: 32 }}
                            buttonContainerStyle={{ backgroundColor: THEME.DISABLE_COLOR, borderRightWidth: 0, paddingVertical: 2 }}
                            selectedButtonStyle={{ backgroundColor: SELECTED_BUTTON_COLOR, borderRadius: 20, marginHorizontal: 3 }}
                        // buttonStyle={{paddingTop: 0}}
                        />
                    </View>
                    <ScrollView>
                    {
                        optionsHeaderList.map((optionsHeaderProps, idx) => {
                            const { id } = optionsHeaderProps;
                            const undefinedId = (typeof id === 'undefined');
                            if (undefinedId) {
                                log.warn('An OptionHeader in SettingsOverlay has no id');
                            }
                            return (
                                <OptionsHeader
                                    key={id}
                                    focus={!undefinedId && id === focusedId}
                                    onFocus={undefinedId ? undefined : () => { handleFocus(id); }}
                                    // bottomDivider={idx !== optionHeaderList.length - 1}
                                    headerContainerStyle={styles.defaultOptionsHeaderStyle}
                                    expand={expandAll}
                                    {...optionsHeaderProps.optionsHeaderProps}
                                >
                                    <CheckBoxList
                                        id={id}
                                        itemList={optionsHeaderProps.optionList}
                                        onItemPress={() => handleFocus(id)}
                                        {...optionsHeaderProps.checkboxListProps}
                                    />
                                </OptionsHeader>
                            );
                        })
                    }
                    {children}
                    </ScrollView>
                </Animatable.View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default React.memo(SettingsOverlay);

const styles = StyleSheet.create({
    defaultContainerStyle: {
        width: '60%',
        height: '100%',
        // position: 'absolute',
        backgroundColor: THEME.BACKGROUND_COLOR,
        // backgroundColor: 'purple',
    },
    defaultCheckboxStyle: {

    },
    defaultOptionsHeaderStyle: {
        // marginTop: 10,
    },
});
