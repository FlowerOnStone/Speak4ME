import { Dimensions } from 'react-native';

export const SCREEN = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    START: 'Start',
    LOGIN: 'Login',
    REGISTER: 'Register',
    HOME: 'Home',
    EDITOR: 'EditorScreen',
    HISTORY: 'HistoryScreen',
    POPULAR_SENTENCES: 'PopularSentencesScreen',
    TOPIC: 'TopicScreen',
    LIST_TOPIC_SENTENCE: 'ListTopicSentencesScreen',
    ADD_POPULAR_TOPIC: 'AddPopularTopicScreen',
    ADD_TOPIC: 'AddTopicScreen',
    EDIT_TOPIC: 'EditTopicScreen',
    ADD_SENTENCE: 'AddSentenceScreen',
    EDIT_SENTENCE: 'EditSentenceScreen',
};
