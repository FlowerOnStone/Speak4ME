/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState } from 'react';
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

const dataList = [sortOptionHeader];

export default function ListTopicSentence({ route, navigation }) {
	const { sentences = [] } = route.params ?? {};

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
	const [newTopicTitle, setNewTopicTitle] = useState('Chủ đề mới');
	const [isEditing, setIsEditing] = useState(false);
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
	},[]);

	const handleAddTopic = () => {
		navigation.navigate(SCREEN.ADD_POPULAR_TOPIC);
	};

	const handleDeleteTopic = (id) => {
		setTopicList(topicList.filter(topic => topic.id !== id));
	};
	const handleViewTopic = (id, title, content) => {
		// console.log(content);
		navigation.push(SCREEN.LIST_TOPIC_SENTENCE, { name: title, sentences: content });
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

	const handleAddSentence = () => {
		navigation.navigate(SCREEN.ADD_SENTENCE, { type: "popular_topic", id: route.params.id, title: route.params.name});
	}

	const handleEditSentence = () => {
		navigation.navigate(SCREEN.EDIT_SENTENCE);
	}


	return (
		<View style={STYLES.container}>
			<View
				style={{width: '100%', height: '100%', alignItems: 'center'}}
				onLayout={(event) => {setDistanceToTop(event.nativeEvent.layout.height);}}
			>
				<ScreenHeader
					leftItem={backButton}
					title={route.params.name}
					rightItem={settingsButton}
				/>
				<SearchBar containerStyle={{marginTop: 5}}/>
				<View style={styles.contentContainer}>
					<ScrollView style={styles.scroll}>
					{
						sentences.length > 0 && sentences.map((sentence, index) => (
						<Sentence key={randomId()} onEdit={handleEditSentence} text={sentence} />
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
