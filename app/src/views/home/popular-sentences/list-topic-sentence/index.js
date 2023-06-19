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
  	SafeAreaView,
	Text
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
import AsyncStorage from '@react-native-async-storage/async-storage';


const dataList = [sortOptionHeader];

export default function ListTopicSentence({ route, navigation }) {
	const { sentences = [] } = route.params ?? {};
	const [darkMode, setDarkMode] = useState(null);


	useEffect(() => {
		AsyncStorage.getItem('darkMode').then(storedDarkMode => {
		  if (storedDarkMode !== null) {
			setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
		  }
		});
		console.log("history screen" + darkMode);
	  }, []);
	

	const [searchText, setSearchText] = useState('');
	const handleSearch = (text) => {
		setSearchText(text);
	};

	const [topicList, setTopicList] = useState([
		{
		  id: 1,
		  title: 'Chào hỏi',
		  content: [
			{ id: 11, text: 'Xin chào', audioPaths: [] },
			{ id: 12, text: 'Tạm biệt', audioPaths: [] },
			{ id: 13, text: 'Hẹn gặp lại', audioPaths: [] },
		  ],
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
		navigation.navigate(SCREEN.LIST_TOPIC_SENTENCE, { name: title, sentences: content.map(sentence => sentence.text) });
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
		navigation.navigate(SCREEN.ADD_SENTENCE);
	}

	const handleEditSentence = () => {
		navigation.navigate(SCREEN.EDIT_SENTENCE);
	}


	return (
		<View style={[STYLES.container, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
			<View
				style={{width: '100%', height: '100%', alignItems: 'center', backgroundColor: darkMode === true ? 'black' : 'white'}}
				onLayout={(event) => {setDistanceToTop(event.nativeEvent.layout.height);}}
			>
				<ScreenHeader
					leftItem={backButton}
					title={route.params.name}
					rightItem={settingsButton}
				/>
				<SearchBar containerStyle={{marginTop: 5}}/>
				<View style={[styles.contentContainer, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
					<ScrollView style={styles.scroll}>
					{
						topicList.map((topic) => (
							<View key={topic.id}>
							  <TouchableOpacity
								style={styles.topic}
								onPress={() => handleViewTopic(topic.id, topic.title, topic.content)}
							  >
							  </TouchableOpacity>
							  <View style={styles.sentences}>
								{topic.content.map((sentence) => (
								  <Sentence key={sentence.id} onEdit={handleEditSentence} text={sentence.text} id={sentence.id} audioPaths={sentence.audioPaths} />
								))}
							  </View>
							</View>
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
