import { Dimensions } from 'react-native';

export const SCREEN = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    START: 'Start',
    LOGIN: 'Login',
    REGISTER: 'Register',
    HOME: 'Home',
    HOME_NAVIGATOR: 'HomeNavigator',
    EDITOR: 'EditorScreen',
    HISTORY: 'HistoryScreen',
    POPULAR_SENTENCES: 'PopularSentencesScreen',
    POPULAR_SENTENCES_NAVIGATOR: 'PopularSentencesNavigator',
    TOPIC: 'TopicScreen',
    TOPIC_NAVIGATOR: 'TopicNavigator',
    LIST_TOPIC_SENTENCE: 'ListTopicSentencesScreen',
    LIST_TOPIC_SENTENCE_NAVIGATOR: 'ListTopicSentencesNavigator',
    ADD_POPULAR_TOPIC: 'AddPopularTopicScreen',
    ADD_TOPIC: 'AddTopicScreen',
    EDIT_TOPIC: 'EditTopicScreen',
    ADD_SENTENCE: 'AddSentenceScreen',
    EDIT_SENTENCE: 'EditSentenceScreen',
};
