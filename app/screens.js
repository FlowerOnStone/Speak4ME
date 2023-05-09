import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import StartScreen from './src/views/StartScreen';
import LoginScreen from './src/views/LoginScreen';
import RegisterScreen from './src/views/RegisterScreen';
import HomeScreen from './src/views/HomeScreen';
import History from './src/views/history';
import Editor from './src/views/editor';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from './src/components/icons/icon-tag';
import moreOptionIcon from './src/components/icons/more-options-icon';
import HistorySentence from './src/components/common/historySentence';
import PopularSentences from './src/views/popular-sentences';
import COLOR from './src/constants/color';
import ListTopicSentence from './src/views/ListTopicSentenceScreen';
import TopicScreen from './src/views/TopicScreen';
import AddPopularTopic from './src/views/AddPopularTopicScreen';
import AddTopic from './src/views/AddTopicScreen';
import EditTopic from './src/views/EditTopicScreen';
import AddSentence from './src/views/AddSentenceScreen';

const screens = [
    {
        name: 'Start',
        component: StartScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Login',
        component: LoginScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: 'Đăng nhập',
        },
    },
    {
        name: 'Register',
        component: RegisterScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: 'Đăng ký',
        },
    },
    {
        name: 'Home',
        component: HomeScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: 'Trang chủ',
            headerLeft: ()=> null,
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon name="bars" color="#000000" type = "solid" style = {styles.setting}/>
                </TouchableOpacity>
            ),
        },
    },
    {
        name: 'EditorScreen',
        component: Editor,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Soạn thảo",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        }
    },
    {
        name: "HistoryScreen",
        component: History,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Lịch sử nói",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "PopularSentencesScreen",
        component: PopularSentences,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Thông dụng",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "TopicScreen",
        component: TopicScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Chuẩn bị trước văn bản",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "ListTopicSentencesScreen",
        component: ListTopicSentence,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Thông dụng",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "AddPopularTopicScreen",
        component: AddPopularTopic,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Thêm chủ đề thông dụng",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "AddTopicScreen",
        component: AddTopic,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Thêm chủ đề",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "EditTopicScreen",
        component: EditTopic,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Sửa chủ đề",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "AddSentenceScreen",
        component: AddSentence,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Thêm văn bản",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "EditSentenceScreen",
        component: AddSentence,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Sửa văn bản",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
];

const styles = StyleSheet.create({
  iconBox: {
    marginRight: 5,
  },
  setting: {
    textAlign: 'right',
    fontSize: 25,
    marginRight:10,
    marginTop: 5,
},
});

export default screens;
