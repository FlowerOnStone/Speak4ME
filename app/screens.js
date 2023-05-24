import StartScreen from './src/views/start';
import LoginScreen from './src/views/login';
import ForgotPasswordScreen from './src/views/login/forgotPassword';
import VerificationForgotPasswordScreen from './src/views/login/forgotPassword/varification';
import SetNewPasswordScreen from './src/views/login/forgotPassword/new-password';
import RegisterScreen from './src/views/register';
import HomeScreen from './src/views/home';
import AccountInfoScreen from './src/views/home/info';
import ChangePasswordScreen from './src/views/home/info/change-password';
import ChangeInfoScreen from './src/views/home/info/change-info';
import Editor from './src/views/home/editor';
import History from './src/views/home/history';
import PopularSentences from './src/views/home/popular-sentences';
import ListTopicSentence from './src/views/home/popular-sentences/list-topic-sentence';
import AddPopularTopic from './src/views/home/popular-sentences/add-popular-topic';
import AddSentence from './src/views/home/popular-sentences/list-topic-sentence/add-sentence';
import EditSentence from './src/views/home/popular-sentences/list-topic-sentence/edit-sentence';
import TopicScreen from './src/views/home/topic';
import AddTopic from './src/views/home/topic/add-topic';
import EditTopic from './src/views/home/topic/edit-topic';

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
            headerShown: false,
        },
    },
    {
        name: "ForgotPasswordScreen",
        component: ForgotPasswordScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: "VerificationForgotPasswordScreen",
        component: VerificationForgotPasswordScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: "SetNewPasswordScreen",
        component: SetNewPasswordScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Register',
        component: RegisterScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'Home',
        component: HomeScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'AccountInfoScreen',
        component: AccountInfoScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'ChangeInfoScreen',
        component: ChangeInfoScreen,
        options: {
            headerShown: false,
        },
    },
    {
        name: 'ChangePasswordScreen',
        component: ChangePasswordScreen,
        options: {
            headerShown: false,
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
        name: "AddSentenceScreen",
        component: AddSentence,
        options: {
            headerShown: false,
        },
    },
    {
        name: "EditSentenceScreen",
        component: EditSentence,
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
        name: "ListTopicSentencesScreen",
        component: ListTopicSentence,
        options: {
            headerShown: false,
        },
    },
    {
        name: "AddPopularTopicScreen",
        component: AddPopularTopic,
        options: {
            headerShown: false,
        },
    },
    {
        name: "AddTopicScreen",
        component: AddTopic,
        options: {
            headerShown: false,
        },
    },
    {
        name: "EditTopicScreen",
        component: EditTopic,
        options: {
            headerShown: false,
        },
    },
];
export default screens;
