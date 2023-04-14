import React, { useState } from 'react';
import { SearchBar as TempSearchBar} from '@rneui/themed';
import SearchIcon from '../../icons/search-icon';
import parseColor from 'parse-color';
import styles from 'styles';
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

export default SearchBar;
