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
import { SearchBar } from 'react-native-elements';

import Icon from '../components/icons/icon-tag';
import plusIcon from '../components/icons/plus-icon';
import Topic from '../components/topic';

export default function TopicScreen({ props, navigation }) {

    const [searchText, setSearchText] = useState('');
    const handleSearch = (text) => {
        setSearchText(text);
    };

    const [topicList, setTopicList] = useState([
        {
            id: 1,
            title: 'Chủ đề 1',
            description: 'Đây là chủ đề 1',
            content: ['first sentence', 'second sentence', 'the third sentence'],
        },
    ]);
    const [newTopicTitle, setNewTopicTitle] = useState('Chủ đề mới');
    const [isEditing, setIsEditing] = useState(false);

    const handleAddTopic = () => {
        navigation.navigate("AddTopicScreen");
    };

    const handleDeleteTopic = (id) => {
        setTopicList(topicList.filter(topic => topic.id !== id));
    };
    const handleEditTopic = (id) => {
        navigation.navigate("EditTopicScreen");
    };
    const handleViewTopic = (id, title, content) => {
        console.log(content);
        navigation.navigate('ListTopicSentencesScreen', { name: title, sentences: content });
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
                            description={topic.description}
                            onDelete={() => handleDeleteTopic(topic.id)}
                            onEdit={() => handleEditTopic(topic.id)}
                            onTitleBlur={(newTitle) => handleTitleBlur(topic.id, newTitle)}
                            onTouch={() => handleViewTopic(topic.id, topic.title, topic.content)}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.addBox}>
                <TouchableOpacity style={styles.iconBox} onPress={handleAddTopic}>
                    <Icon icon={plusIcon} iconStyle={{scale: 2, color: COLOR.TITLE}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        color: 'red',
        width:'90%',
        height: '100%',
    },
    searchBar: {
        backgroundColor: '#fff', // Màu nền của thanh tìm kiếm
        width: "90%",
        borderRadius: 35,
        borderWidth: 2,
        margin: 10
    },
    searchBarInput: {
        backgroundColor: '#f2f2f2', // Màu nền của input trong thanh tìm kiếm
        borderRadius: 30,
    },
    searchBarTextInput: {
        fontSize: 16, // Kích thước chữ trong input của thanh tìm kiếm
    },
    addBox: {
        height: '3%',
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
