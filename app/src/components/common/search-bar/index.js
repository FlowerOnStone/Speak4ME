import React, { useState } from 'react';
import { SearchBar as TempSearchBar } from '@rneui/themed';
import SearchIcon from '../../icons/search-icon';
import parseColor from 'parse-color';
import styles from './styles';
import Icon from '../../icons/icon-tag';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Shadow} from 'react-native-shadow-2';
import THEME from '../../../constants/theme';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const dropShadowProps = {
    'shadowOffset': {
        'width': 0,
        'height': 3,
    },
    'shadowRadius': 2,
    'shadowColor': parseInt(parseColor('rgba(0, 0, 0, 0.25)').hex.substring(1), 16),
    'shadowOpacity': 0.2,
};

// const clearIcon = React.createElement(FontAwesomeIcon, {size: 30, color: 'grey', name: 'crop'});
const clearIcon = {
    size: THEME.FONT_SIZE_SMALL,
};

const cancelIcon = {
    type: 'font-awesome',
    size: THEME.FONT_SIZE_SMALL,
    name: 'angle-left',
};

const SearchBar = (props) => {
    const [search, setSearch] = useState('');
    const updateSearch = (text) => {
        setSearch(text);
    };
    return (
        <View style={[{width: '90%'}, props.containerStyle]}>
            {/* <DropShadow style={dropShadowProps}> */}
                <View style={{borderRadius: 25}}>
                    <TempSearchBar
                        placeholder="Tìm kiếm"
                        searchIcon={<Icon icon={SearchIcon}/>}
                        clearIcon={clearIcon}
                        cancelIcon={cancelIcon}
                        platform="android"
                        onChangeText={updateSearch}
                        value={search}
                        dropShadow={dropShadowProps}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        leftIconContainerStyle={styles.leftIconContainerStyle}
                        inputStyle={styles.inputStyle}
                        rightIconContainerStyle={styles.rightIconContainerStyle}
                        {...props}
                    />
                </View>
            {/* </DropShadow> */}
        </View>
    );
};

export default SearchBar;
