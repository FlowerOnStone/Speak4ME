/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { settingsIcon } from '../../../icons/settings-icon';
import HEADER from '../../../../constants/header';
import THEME from '../../../../constants/theme';
import toJSX from '../../../../utils/convert-to-jsx';
import Icon from '../../../icons/icon-tag';

const Header = ({hasIcon = true, title, icon, headerStyle, titleStyle}) => {
  return (
    <View style={{...styles.containerStyle, ...headerStyle}}>
        {hasIcon ?
          (typeof icon === 'undefined' ? <Icon icon={settingsIcon} iconStyle={{scale: 0.62}} containerStyle={styles.iconContainerStyle}/>
                                       : toJSX(icon))
                                       : null}
        <Text style={{...styles.titleStyle, ...titleStyle}}>{title || 'Cài đặt'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    iconContainerStyle: {
      marginLeft: 6,
    },
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '7%',
        backgroundColor: THEME.TITLE_COLOR,
        alignItems: 'center',
    },
    titleStyle: {
        // fontSize: THEME.FONT_SIZE_LARGE,
        fontSize: THEME.FONT_SIZE_EXTRA_LARGE,
        fontFamily: 'Inner',
        color: 'black',
        marginLeft: 10,
    },

});

export default Header;
