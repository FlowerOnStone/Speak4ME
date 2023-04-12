import { View, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SearchBar as TempSearchBar} from '../@rneui/themed/dist';
import SearchIcon from '../icons/search-icon';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import parseColor from 'parse-color';
// import { Icon } from 'react-native-vector-icons/FontAwesome';

const dropShadowProps = {
    'shadowOffset': {
        'width': 0,
        'height': 4,
    },
    'shadowRadius': 2,
    'shadowColor': parseInt(parseColor('rgba(0, 0, 0, 0.25)').hex.substring(1), 16),
    'shadowOpacity': 0.2,
};

// const clearIcon = React.createElement(FontAwesomeIcon, {size: 30, color: 'grey', name: 'crop'});
const clearIcon = {
    size: 30,
};

const cancelIcon = {
    type: 'font-awesome',
    size: 35,
    name: 'angle-left',
};

const SearchBar = (props) => {
    const [search, setSearch] = useState('');
    const updateSearch = (text) => {
        setSearch(text);
    };
    return (
        <TempSearchBar
            placeholder="Tìm kiếm"
            searchIcon={SearchIcon}
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
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    inputContainerStyle: {
        'height': Dimensions.get('window').width * 0.12,
        'width': '90%',
        'boxSizing': 'border-box',
        'backgroundColor': '#FFFFFF',
        'borderWidth': 3,
        'borderBottomWidth': 3,
        'borderColor': '#BEBEBE',
        'borderStyle': 'solid',
        'borderTopLeftRadius': 25,
        'borderTopRightRadius': 25,
        'borderBottomRightRadius': 25,
        'borderBottomLeftRadius': 25,
    },
    leftIconContainerStyle: {

    },
    inputStyle: {
        marginLeft: 6,
    },
    rightIconContainerStyle: {

    },
});

export default SearchBar;
