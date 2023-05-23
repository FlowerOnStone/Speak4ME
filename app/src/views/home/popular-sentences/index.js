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
} from 'react-native';
import Icon from '../../../components/icons/icon-tag';
import COLOR from '../../../constants/color';
import PopularTopic from '../../../components/popular-sentences-screen/topic';
import SearchBar from '../../../components/common/search-bar';
import plusIcon from '../../../components/icons/plus-icon';
import { settingsIcon } from '../../../components/icons/settings-icon';
import { sortOptionHeader } from '../../../components/common/settings-overlay/template-options-header';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import { log } from '../../../utils/logger';
import { SCREEN } from '../../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';

const dataList = [sortOptionHeader];

export default function PopularSentences({ props, navigation }) {
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
		navigation.navigate(SCREEN.LIST_TOPIC_SENTENCE, { name: title, sentences: content });
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

	return (
		<View style={STYLES.container}>
			<View
				style={{width: '100%', height: '100%', alignItems: 'center'}}
				onLayout={(event) => {setDistanceToTop(event.nativeEvent.layout.height);}}
			>
				<ScreenHeader
					leftItem={backButton}
					title={'Thông dụng'}
					rightItem={settingsButton}
				/>
				<SearchBar containerStyle={{marginTop: 5}}/>
				<ScrollView style={styles.contentContainer}>
					{topicList.map(topic => (
						<TouchableWithoutFeedback key={topic.id} style={styles.topicContainer}>
							<PopularTopic
								title={topic.title}
								sentences={topic.content}
								onDelete={() => handleDeleteTopic(topic.id)}
								onTitleBlur={(newTitle) => handleTitleBlur(topic.id, newTitle)}
								onTouch={() => handleViewTopic(topic.id, topic.title, topic.content)}
							/>
						</TouchableWithoutFeedback>
					))}
				</ScrollView>
				<View style={styles.addBox}>
					<TouchableOpacity style={styles.iconBox} onPress={handleAddTopic}>
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
	container: {
		flex: 1,
		backgroundColor: COLOR.BACKGROUND,
		alignItems: 'center',
	},
	
	contentContainer: {
		flex: 1,
		color: 'red',
		width:'90%',
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
