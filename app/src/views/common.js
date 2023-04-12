/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import color from '../constants/color';
import Topic from '../components/topic';
import SuggestionBox from '../components/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import screens from '../../screens';
import { SearchBar } from 'react-native-elements';


export default function Common(props) {

    const [searchText, setSearchText] = useState('');
    const handleSearch = (text) => {
        setSearchText(text); // Lưu trữ giá trị của thanh tìm kiếm khi người dùng nhập vào
        // Thực hiện hoạt động tìm kiếm dựa trên searchText ở đây
    };


    return (
        <ScrollView style={styles.container}>
            <SearchBar
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.searchBarInput}
                inputStyle={styles.searchBarTextInput}
                placeholder="Tìm kiếm..."
                value={searchText}
                onChangeText={handleSearch}
            />
            <Topic />
            <Topic />
            <Topic />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: color.background,
    },
    searchBar: {
        backgroundColor: '#fff', // Màu nền của thanh tìm kiếm
    },
    searchBarInput: {
        backgroundColor: '#f2f2f2', // Màu nền của input trong thanh tìm kiếm
    },
    searchBarTextInput: {
        fontSize: 16, // Kích thước chữ trong input của thanh tìm kiếm
    },
});