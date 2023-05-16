/* eslint-disable react-native/no-inline-styles */
/**

Sample React Native App
https://github.com/facebook/react-native
@format
*/
import React, { useState, useCallback } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import COLOR from '../../../constants/color';
import plusIcon from '../../../components/icons/plus-icon';
import Topic from '../../../components/topic';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from '../../../components/icons/icon-tag';
import { settingsIcon } from '../../../components/icons/settings-icon';
import THEME from '../../../constants/theme';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import { log } from '../../../utils/logger';
import SearchBar from '../../../components/common/search-bar';
import { TouchableWithoutFeedback } from 'react-native';
import { SCREEN } from '../../../constants/screen';

export default function TopicScreen({ route, navigation }) {

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
    /// Header
    const [settingsButton] = useState(
        <TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
            <Icon icon={settingsIcon} iconStyle={{ scale: 0.8 }} />
        </TouchableOpacity>
    );
    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color="black" />
        </TouchableOpacity>
    );
    /// Settings Overlay
    const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
    const [distanceToTop, setDistanceToTop] = useState(0);
    const handleBackdropPress = useCallback(() => {
        setSettingsOverlayVisible(false);
    }, []);

    const handleAddTopic = () => {
        navigation.navigate(SCREEN.ADD_TOPIC);
    };

    const handleDeleteTopic = (id) => {
        setTopicList(topicList.filter(topic => topic.id !== id));
    };
    const handleEditTopic = (id) => {
        navigation.navigate(SCREEN.EDIT_TOPIC);
    };
    const handleViewTopic = (id, title, content) => {
        // console.log(content);
        navigation.navigate(SCREEN.LIST_TOPIC_SENTENCE_NAVIGATOR, { name: title, sentences: content });
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
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View
                style={{ width: '100%', height: '100%', alignItems: 'center' }}
                onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
            >
                <ScreenHeader
                    leftItem={backButton}
                    title={'Chuẩn bị trước'}
                    rightItem={settingsButton}
                />
                <SearchBar containerStyle={{marginTop: 5}}/>
                <View style={styles.contentContainer}>
                    {topicList.map(topic => {
                        // log.debug(topic);
                        return (
                            <TouchableWithoutFeedback key={topic.id} >
                                <Topic
                                    title={topic.title}
                                    description={topic.description}
                                    onDelete={() => handleDeleteTopic(topic.id)}
                                    onEdit={() => handleEditTopic(topic.id)}
                                    onTitleBlur={(newTitle) => handleTitleBlur(topic.id, newTitle)}
                                    onTouch={() => handleViewTopic(topic.id, topic.title, topic.content)}
                                />
                            </TouchableWithoutFeedback>
                        );
                    })}
                </View>
                <TouchableOpacity style={styles.iconBox} onPress={handleAddTopic}>
                    <Icon icon={plusIcon} iconStyle={{ scale: 2, color: COLOR.TITLE }} />
                </TouchableOpacity>
            </View>

            <SettingsOverlay.SlideInDown
                isVisible={settingsOverlayVisible}
                distanceToTop={distanceToTop}
                onBackdropPress={handleBackdropPress}
                // defaultFocusedId={sortOptionHeader.id}
                optionsHeaderList={[]}
            />
        </KeyboardAvoidingView>
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
        // color: 'red',
        width: '90%',
        // height: '100%',
    },
    searchBar: {
        backgroundColor: '#fff', // Màu nền của thanh tìm kiếm
        width: '90%',
        borderRadius: 35,
        borderWidth: 2,
        margin: 10,
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
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 1000,
    },
});
