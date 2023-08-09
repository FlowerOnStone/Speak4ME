/**

Sample React Native App
https://github.com/facebook/react-native
@format
*/
import React, { useCallback, useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../../constants/color';
import PopularTopic from '../../../components/popular-sentences-screen/topic';
import { sortOptionHeader } from '../../../components/common/settings-overlay/template-options-header';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import { log } from '../../../utils/logger';
import { SCREEN } from '../../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import styles from '../../../components/common/search-bar/styles';
import { SearchBar as TempSearchBar } from '@rneui/themed';
import parseColor from 'parse-color';
import { getPopularTopics, deletePopularTopic, changePopularTopicTitle } from '../Data/popular-topic-data';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

const dataList = [sortOptionHeader];

export default function PopularSentences({ route, navigation }) {
	const [searchText, setSearchText] = useState('');
	const handleSearch = (text) => {
		setSearchText(text);
	};
	const [reset, setReset] = useState(false);

	const [isEditing, setIsEditing] = useState(false);
	const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
	const [settingsButton] = useState(
		<TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
			<Icon name="cog" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const handleBackdropPress = useCallback(() => {
		setSettingsOverlayVisible(false);
	}, []);

	const handleAddTopic = () => {
		navigation.navigate(SCREEN.ADD_POPULAR_TOPIC);
	};

	const handleDeleteTopic = (id) => {
		deletePopularTopic(id);
		setReset(!reset);
	};

	const handleAddSentence = (topicId, topicTitle) => {
		navigation.navigate(SCREEN.LIST_TOPIC_SENTENCE_NAVIGATOR, {
			screen: SCREEN.ADD_SENTENCE,
			params: { type: "popular_topic", id: topicId, title: topicTitle },
		});
	}
	const handleViewTopic = (topicId) => {
		// console.log(content);
		navigation.navigate(SCREEN.LIST_TOPIC_SENTENCE_NAVIGATOR, {
			screen: SCREEN.LIST_TOPIC_SENTENCE,
			params: {
				type: "popular_topic",
				id: topicId
			},
		});
	};

	const handleTitleBlur = (targetId, newTitle) => {
		changePopularTopicTitle(targetId, newTitle);
		setIsEditing(false);
	};

	const clearIcon = {
		size: THEME.FONT_SIZE_SMALL,
	};
	
	const cancelIcon = {
		type: 'font-awesome',
		size: THEME.FONT_SIZE_SMALL,
		name: 'angle-left',
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

	const renderItem = ({ item }) => (
		<TouchableWithoutFeedback key={item.id} style={popularStyles.topicContainer}>
			<PopularTopic
				title={item.title}
				sentences={item.sentences}
				onDelete={() => handleDeleteTopic(item.id)}
				onTitleBlur={(newTitle) => handleTitleBlur(item.id, newTitle)}
				onAddSentence={() => handleAddSentence(item.id, item.title)}
				onTouch={() => handleViewTopic(item.id)}
			/>
		</TouchableWithoutFeedback>
  	);

  	const filteredData = getPopularTopics().filter(item =>
    	item.title.toLowerCase().includes(searchText.toLowerCase())
  	);

	return (
		<View style={STYLES.container}>
			<View
				style={{ width: '100%', height: '100%', alignItems: 'center' }}
				onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
			>
				<ScreenHeader
					leftItem={backButton}
					title={'Thông dụng'}
					rightItem={settingsButton}
				/>
				<View style={[{width: '90%'}, containerStyle={marginTop: 18}]}>
					<View style={{borderRadius: 25}}>
						<TempSearchBar
							// placeholder="Tìm kiếm"
							searchIcon={<Icon name="search" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>}
							clearIcon={<Icon name="times" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>}
							cancelIcon={<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>}
							platform="android"
							// onChangeText={updateSearch}
							value={searchText}
							onChangeText={(text) => setSearchText(text)}
							placeholder="Tìm kiếm"
							dropShadow={dropShadowProps}
							containerStyle={styles.containerStyle}
							inputContainerStyle={styles.inputContainerStyle}
							leftIconContainerStyle={styles.leftIconContainerStyle}
							inputStyle={styles.inputStyle}
							rightIconContainerStyle={styles.rightIconContainerStyle}
							// {...props}
						/>
					</View>
       			</View>
				<FlatList
						style={popularStyles.contentContainer}
						data={filteredData}
						renderItem={renderItem}
						keyExtractor={item => item}
				/>
				<View style={popularStyles.addBox}>
					<TouchableOpacity onPress={handleAddTopic}>
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
	container: {
		flex: 1,
		backgroundColor: COLOR.BACKGROUND,
		alignItems: 'center',
	},

	contentContainer: {
		flex: 1,
		color: 'red',
		width: '90%',
		height: '100%',
		// backgroundColor: 'red',
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
		position: 'absolute',
		bottom: 30,
		right: 30,
	},
});
