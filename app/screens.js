import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import StartScreen from './src/views/start';
import LoginScreen from './src/views/login';
import RegisterScreen from './src/views/register';
import HomeScreen from './src/views/home';
import History from './src/views/home/history';
import Editor from './src/views/home/editor';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from './src/components/icons/icon-tag';
import moreOptionIcon from './src/components/icons/more-options-icon';
import HistorySentence from './src/components/common/historySentence';
import PopularSentences from './src/views/home/popular-sentences';
import COLOR from './src/constants/color';
import ListTopicSentence from './src/views/home/popular-sentences/list-topic-sentence';
import TopicScreen from './src/views/home/topic';
import AddPopularTopic from './src/views/home/popular-sentences/add-popular-topic';
import AddTopic from './src/views/home/topic/add-topic';
import EditTopic from './src/views/home/topic/edit-topic';
import AddSentence from './src/views/home/popular-sentences/list-topic-sentence/add-sentence';
import ForgotPasswordScreen from './src/views/login/forgotPassword/forgot';
import VerificationForgotPasswordScreen from './src/views/login/forgotPassword/verification';
import SetNewPasswordScreen from './src/views/login/forgotPassword/newPassword';
import AccountInfoScreen from './src/views/home/info';

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
            eaderLeft: () => null,            

        },
    },
    {
        name: 'AccountInfoScreen',
        component: AccountInfoScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: 'Thông tin chung',
        },
    },
    {
        name: 'EditorScreen',
        component: Editor,
        options: {
            headerShown: false,
        },
    },
    {
        name: "HistoryScreen",
        component: History,
        options: {
            headerShown: false,
        },
    },
    {
        name: "PopularSentencesScreen",
        component: PopularSentences,
        options: {
            headerShown: false,
        },
    },
    {
        name: "TopicScreen",
        component: TopicScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: "ForgotPasswordScreen",
        component: ForgotPasswordScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Quên mật khẩu",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "VerificationForgotPasswordScreen",
        component: VerificationForgotPasswordScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Xác minh",
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionIcon} />
                </TouchableOpacity>
            ),
        },
    },
    {
        name: "SetNewPasswordScreen",
        component: SetNewPasswordScreen,
        options: {
            headerStyle: {
                backgroundColor: COLOR.TITLE,
            },
            title: "Đặt lại mật khẩu",
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
        marginRight: 10,
        marginTop: 5,
    },
});

export default screens;
