/**

Sample React Native App
https://github.com/facebook/react-native
@format
*/
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';


import COLOR from '../constants/color';
import Topic from '../components/popular-sentences-screen/topic';

import { SearchBar } from 'react-native-elements';

import { Icon } from '../components/icons/icon-tag';
import plusIcon from '../components/icons/plus-icon';

export default function Common(props) {

    const [searchText, setSearchText] = useState('');
    const handleSearch = (text) => {
        setSearchText(text);
    };

    const [topicList, setTopicList] = useState([
        {
            id: 1,
            title: 'Chủ đề 1',
            content: ['first sentence', 'second sentence', 'the third sentence'],
        },
    ]);
    const [newTopicTitle, setNewTopicTitle] = useState('Chủ đề mới');
    const [isEditing, setIsEditing] = useState(false);

    const handleAddTopic = () => {
        const newTopic = {
            id: topicList.length + 1,
            title: newTopicTitle,
            content: ['first sentence', 'second sentence', 'the third sentence'],
        };
        setTopicList([...topicList, newTopic]);
        setNewTopicTitle('Chủ đề mới');
    };

    const handleDeleteTopic = (id) => {
        setTopicList(topicList.filter(topic => topic.id !== id));
    };

    const handleTitleBlur = (targetId, newTitle) => {

        const updatedList = topicList.map((topic) => {
            if (topic.id === targetId) {
                return { ...topic, title: newTitle };
            } else {
                return topic;
            }
        });

        setIsEditing(false);
        setTopicList(updatedList);
    };

    return (
        <View style={styles.container}>
            <SearchBar containerStyle={styles.searchBar} inputContainerStyle={styles.searchBarInput} inputStyle={styles.searchBarTextInput} placeholder="Tìm kiếm..." value={searchText} onChangeText={handleSearch} />
            <ScrollView style={styles.contentContainer}>
                {topicList.map(topic => (
                    <TouchableOpacity key={topic.id} style={styles.topicContainer}>
                        <Topic
                            title={topic.title}
                            sentences={topic.content}
                            onDelete={() => handleDeleteTopic(topic.id)}
                            onTitleBlur={(newTitle) => handleTitleBlur(topic.id, newTitle)}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.addBox}>
                <TouchableOpacity style={styles.iconBox} onPress={handleAddTopic}>
                    <Icon icon={plusIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: COLOR.BACKGROUND,
    },
    contentContainer: {
        flex: 1,
        color: COLOR.BACKGROUND,
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
    addBox: {
        height: '10%',
        width: '100%',
        paddingBottom: '5%',
        borderColor: COLOR.TITLE,
        alignItems: 'flex-end',
        paddingRight: '10%',
    },

    iconBox: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'flex-end',
    },
});
