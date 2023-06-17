import React, { useState } from 'react';
import { SearchBar as TempSearchBar } from '@rneui/themed';
import SearchIcon from '../../icons/search-icon';
import parseColor from 'parse-color';
import styles from './styles';
import Icon from '../../icons/icon-tag';
import {View, TextInput, Text, FlatList, ScrollView} from 'react-native';
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
    const [searchText, setSearchText] = useState("");
    // const updateSearch = (text) => {
    //     setSearch(text);
    // };

    const DATA = [
		{ id: '1', text: 'Tôi thích ăn bánh mì' },
		{ id: '2', text: 'Hôm nay trời đẹp quá' },
		{ id: '3', text: 'Bạn có thể cho tôi mượn một chút tiền không?' },
		{ id: '4', text: 'Lớp học của chúng ta rất thú vị' },
		{ id: '5', text: 'Tôi sẽ đi du lịch vào cuối tuần này' },
	  ];

  	const renderItem = ({ item }) => (
    	<Text style={styles.item}>{item.text}</Text>
  	);

  	const filteredData = DATA.filter(item =>
    	item.text.toLowerCase().includes(searchText.toLowerCase())
  	);
    

    return (
        <View style={[{width: '90%'}, props.containerStyle]}>
            {/* <DropShadow style={dropShadowProps}> */}
                <View style={{borderRadius: 25}}>
                    <TempSearchBar
                        // placeholder="Tìm kiếm"
                        searchIcon={<Icon icon={SearchIcon}/>}
                        clearIcon={clearIcon}
                        cancelIcon={cancelIcon}
                        platform="android"
                        // onChangeText={updateSearch}
                        value={searchText}
					    onChangeText={(text) => setSearchText(text)}
					    placeholder="Tìm kiếm"
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
