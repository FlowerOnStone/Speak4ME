/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	TouchableOpacity,
  	SafeAreaView
} from 'react-native';

import COLOR from '../../../../constants/color';
import plusIcon from '../../../../components/icons/plus-icon';
import Icon from '../../../../components/icons/icon-tag';
import { randomId } from '../../../../utils/random-id';
import SearchBar from '../../../../components/common/search-bar';
import { SCREEN } from '../../../../constants/screen';
import Sentence from '../../../../components/common/sentence';
import ScreenHeader from '../../../../components/common/screen-header';
import THEME from '../../../../constants/theme';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import { settingsIcon } from '../../../../components/icons/settings-icon';
import { sortOptionHeader } from '../../../../components/common/settings-overlay/template-options-header';
import SettingsOverlay from '../../../../components/common/settings-overlay';
import STYLES from '../../../../constants/styles';
import { deletePopularSentence, getPopularTopic, usePopularSentence } from '../../Data/popular-topic-data';
import TTS from '../../../../utils/TTS';
import { deleteSentence, getTopic, useSentence } from '../../Data/topic-data';

const dataList = [sortOptionHeader];

export default function ListTopicSentence({ route, navigation }) {
	useEffect(() => {
        TTS.initTTS();
    }, []);

	let topic = [];
	if (route.params.type == "popular_topic") {
		topic = getPopularTopic(route.params.id);
	} else {
		topic = getTopic(route.params.id);
	}
	const sentences  = topic.sentences;

	const [searchText, setSearchText] = useState('');
	const handleSearch = (text) => {
		setSearchText(text);
	};

	const [topicList, setTopicList] = useState([
		{
			id: 1,
			title: 'Chào hỏi',
			content: ['Xin chào', 'Tạm biệt', 'Hẹn gặp lại'],
		},
	]);
	const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
	const [settingsButton] = useState(
		<TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
			<Icon icon={settingsIcon} iconStyle={{scale: 0.8}}/>
		</TouchableOpacity>
	);
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black'/>
		</TouchableOpacity>
	);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const handleBackdropPress = useCallback(() => {
		setSettingsOverlayVisible(false);
	}, []);
	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);
	const handleDeleteSentence = (sentenceId) => {
		if (route.params.type == "popular_topic") {
			deletePopularSentence(topic.id, sentenceId);
		} else {
			deleteSentence(topic.id, sentenceId);
		}
		forceUpdate();
	}

	const handleAddSentence = () => {
		navigation.navigate(SCREEN.ADD_SENTENCE, {
			type: route.params.type,
			topicId: topic.id,
			title: topic.title
		});
	};

	const handleEditSentence = (sentence) => {
		navigation.navigate(SCREEN.EDIT_SENTENCE, {
			type: route.params.type,
			topicId: topic.id,
			title: topic.title,
			content: sentence.content,
			sentenceId: sentence.id,
		});
	};

	const handleSpeakSentence = (sentence) => {
		TTS.Tts.speak(sentence.content);
		if (route.params.type == "popular_topic") {
			usePopularSentence(topic.id, sentence.id);
		} else {
			useSentence(topic.id, sentence.id);
		}
		forceUpdate();
	};


	return (
		<View style={STYLES.container}>
			<View
				style={{width: '100%', height: '100%', alignItems: 'center'}}
				onLayout={(event) => {setDistanceToTop(event.nativeEvent.layout.height);}}
			>
				<ScreenHeader
					leftItem={backButton}
					title={topic.title}
					rightItem={settingsButton}
				/>
				<SearchBar containerStyle={{marginTop: 5}}/>
				<View style={styles.contentContainer}>
					<ScrollView style={styles.scroll}>
					{
						sentences.length > 0 && sentences.map((sentence, index) => (
							<Sentence
								onDelete={() => handleDeleteSentence(sentence.id)}
								onSpeak={() => handleSpeakSentence(sentence)}
								onEdit={() => handleEditSentence(sentence)}
								text={sentence.content}
							/>
						))
					}
					</ScrollView>
				</View>
				<View style={styles.addBox}>
					<TouchableOpacity style={styles.iconBox} onPress={handleAddSentence}>
						<Icon icon={plusIcon} iconStyle={{scale: 2, color: COLOR.TITLE}} />
					</TouchableOpacity>
				</View>
			</View>
			<SettingsOverlay.SlideInDown
				isVisible={settingsOverlayVisible}
				distanceToTop={distanceToTop}
				onBackdropPress={handleBackdropPress}
				defaultFocusedId={sortOptionHeader.id}
				optionsHeaderList={dataList}
			/>
		</View>
	);
}



const styles = StyleSheet.create({
	contentContainer: {
		...STYLES.contentContainer,
		height: '80%',
	},

	scroll: {
		display: 'flex',
		marginLeft: '5%',
		marginRight: '5%',
		width: '90%',
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
		borderColor: COLOR.TITLE,
		position: "absolute",
		bottom: 30,
		right: 30
	},

	iconBox: {
		flex: 1,
		paddingLeft: 15,
		justifyContent: 'flex-end',
	},
});
