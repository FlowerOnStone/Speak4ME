/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import { ListItem } from '@rneui/themed';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import THEME from '../../../constants/theme';
import toJSX from '../../../utils/convert-to-jsx';
import {LightenDarkenColor} from 'lighten-darken-color';
import ExpandCollapseAnim from './expand-collapse-anim';

const defaultCollapseIcon = <RNVIcon name="angle-down"
                                  size={THEME.FONT_SIZE_MEDIUM}
                                  color={THEME.FONT_COLOR}
                         />;

/**
 *
 * @param {
 *            string title: title for OptionsHeader <br>
 *            style titleStyle: style for title text
 *            object headerStyle: styles for default header, details in https://reactnativeelements.com/docs/components/listitem_accordion
 *            style headerContainerStyle: style for header container
 *            style containerStyle: style for container, including children
 *            string focusColor: color of left box, default is THEME.TITLE_COLOR
 *            string focusBackgroundColor: color of background color of container when focus
 *            React.Component titleIcon: icon for title
 *            React.Component expandIcon: icon for expanding
 *            React.Component collapseIcon: icon for collapsing
 *            function onFocus(): do something when focused
 *            bool focus: check if header is being focused
 *        } props
 * @returns
 */
const OptionsHeader = ({
    title,
    expand,
    titleStyle,
    headerStyle,
    headerContainerStyle,
    containerStyle,
    bottomDivider,
    focusColor,
    focusBackgroundColor,
    titleIcon,
    expandIcon,
    collapseIcon,
    onFocus,
    focus,
    children,
}) => {

    title ??= 'No Title';
    titleStyle = StyleSheet.flatten([styles.defaultTitleStyle, titleStyle]);
    // headerContainerStyle = StyleSheet.flatten([styles.defaultHeaderContainerStyle, headerContainerStyle]);
    containerStyle = StyleSheet.flatten([styles.defaultContainerStyle, containerStyle]);
    focusColor ??= THEME.TITLE_COLOR;
    focusBackgroundColor ??= LightenDarkenColor(focusColor, 120);
    collapseIcon ??= defaultCollapseIcon;
    focus ??= false;

    const [isFocus, setIsFocus] = useState(focus);
    const [expanded, setExpanded] = React.useState(expand);
    const focusTrue = useRef(true);

    useEffect(() => {
        // console.log('change focus')
        setIsFocus(focus);
    }, [focus]);
    useEffect(() => {
        setExpanded(expand);
    }, [expand]);
    useEffect(() => {
        if (isFocus) {
            if (typeof onFocus === 'function')
                {onFocus();}
        }
    }, [isFocus]);

    const handleFocus = () => {
        setIsFocus(focusTrue.current);
    };
    const getCurrentFocusColor = () => (isFocus ? focusColor : 'transparent');
    const getCurrentFocusBackgroundColor = () => (isFocus ? focusBackgroundColor : 'transparent');

    return (
        <View style={{containerStyle}} onStartShouldSetResponder={handleFocus}>
            <ListItem.Accordion
                content={
                    <View style={{flexDirection: 'row', height: '100%', alignItems: 'center', width: '100%'}}>
                        <View style={{width: 5, height: '100%', backgroundColor: getCurrentFocusColor()}}/>
                        {toJSX(titleIcon)}
                        <Text style={titleStyle}>{title}</Text>
                        <View style={{position: 'absolute', right: 10}}>
                            <ExpandCollapseAnim expanded={expanded} collapseIcon={collapseIcon} expandIcon={expandIcon} />
                        </View>
                    </View>
                }
                icon={null}
                // expandIcon={expandIcon}
                isExpanded={true}
                onPress={() => {
                    setExpanded(!expanded);
                    handleFocus();
                }}
                containerStyle={StyleSheet.flatten([styles.defaultHeaderContainerStyle, {backgroundColor: getCurrentFocusBackgroundColor()}, headerContainerStyle])}
                {...headerStyle}
            >
                <View style={{display: expanded ? 'flex' : 'none'}}>
                    {children}
                    {bottomDivider && <View style={{width: '100%', height: 0.5, backgroundColor: '#8B7E74'}}/>}
                </View>
            </ListItem.Accordion>
        </View>
    );
};

export default OptionsHeader;

const styles = StyleSheet.create({
    defaultTitleStyle: {
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.FONT_COLOR,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    defaultContainerStyle: {
        // backgroundColor: 'black',
    },
    defaultHeaderContainerStyle: {
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        // backgroundColor: 'black',
    },
});
