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
import SearchBar from '../../../../components/common/search-bar';
import { SCREEN } from '../../../../constants/screen';
import Sentence from '../../../../components/common/sentence';
import ScreenHeader from '../../../../components/common/screen-header';
import THEME from '../../../../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { sortOptionHeader } from '../../../../components/common/settings-overlay/template-options-header';
import SettingsOverlay from '../../../../components/common/settings-overlay';
import STYLES from '../../../../constants/styles';
import { deletePopularSentence, getPopularTopic, usePopularSentence } from '../../Data/popular-topic-data';
import parseColor from 'parse-color';
import TTS from '../../../../utils/TTS';
import { deleteSentence, getTopic, useSentence } from '../../Data/topic-data';
import { ICON_CONSTANTS } from '../../../../constants/icon-constants';
import styles from '../../../../components/common/search-bar/styles';
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
			<Icon name="cog" size={ICON_CONSTANTS.MEDIUM_SIZE} color='black' solid/>
		</TouchableOpacity>
	);
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" size={ICON_CONSTANTS.MEDIUM_SIZE} color='black' solid/>
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
	const dropShadowProps = {
		'shadowOffset': {
			'width': 0,
			'height': 3,
		},
		'shadowRadius': 2,
		'shadowColor': parseInt(parseColor('rgba(0, 0, 0, 0.25)').hex.substring(1), 16),
		'shadowOpacity': 0.2,
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
				<View style={[{ width: '90%' }, containerStyle = { marginTop: 18 }]}>
					<View style={{borderRadius: 25}}>
						<SearchBar
							// placeholder="Tìm kiếm"
							searchIcon={<Icon name="search" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>}
							clearIcon={<Icon name="times" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>}
							cancelIcon={<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>}
							platform="android"
							value={searchText}
							onChangeText={(text) => setSearchText(text)}
							placeholder="Tìm kiếm"
							dropShadow={dropShadowProps}
							containerStyle={styles.containerStyle}
							inputContainerStyle={styles.inputContainerStyle}
							leftIconContainerStyle={styles.leftIconContainerStyle}
							inputStyle={styles.inputStyle}
							rightIconContainerStyle={styles.rightIconContainerStyle}
						/>
					</View>
       			</View>

				<View style={popularStyles.contentContainer}>
					<ScrollView style={popularStyles.scroll}>
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
				<View style={popularStyles.addBox}>
					<TouchableOpacity onPress={handleAddSentence}>
						<Icon name="plus-circle" color={THEME.TITLE_COLOR} size={ICON_CONSTANTS.LARGE_SIZE} solid/>
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



const popularStyles = StyleSheet.create({
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

	addBox: {
		borderColor: COLOR.TITLE,
		position: "absolute",
		bottom: 30,
		right: 30
	},
});
