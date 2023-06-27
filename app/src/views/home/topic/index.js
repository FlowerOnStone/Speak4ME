/* eslint-disable react-native/no-inline-styles */
/**

Sample React Native App
https://github.com/facebook/react-native
@format
*/
import React, { useState, useCallback, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
	FlatList
} from 'react-native';
import COLOR from '../../../constants/color';
import plusIcon from '../../../components/icons/plus-icon';
import Topic from '../../../components/topic';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from '../../../components/icons/icon-tag';
import { settingsIcon } from '../../../components/icons/settings-icon';
import THEME from '../../../constants/theme';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import { log } from '../../../utils/logger';
import SearchBar from '../../../components/common/search-bar';
import { TouchableWithoutFeedback } from 'react-native';
import { SCREEN } from '../../../constants/screen';
import styles from '../../../components/common/search-bar/styles';
import { SearchBar as TempSearchBar } from '@rneui/themed';
import SearchIcon from '../../../components/icons/search-icon';
import parseColor from 'parse-color';
import { getTopics, deleteTopic } from '../Data/topic-data';

export default function TopicScreen({ route, navigation }) {
	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const [searchText, setSearchText] = useState('');
	const handleSearch = (text) => {
		setSearchText(text);
	};

	let topicList = getTopics();


    React.useEffect(() => {
		const focusHandler = navigation.addListener('focus', () => {
			forceUpdate();
        });
        return focusHandler;
    }, [navigation]);

	const [settingsButton] = useState(
		<TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
			<Icon icon={settingsIcon} iconStyle={{ scale: 0.8 }} />
		</TouchableOpacity>
	);
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color="black" />
		</TouchableOpacity>
	);
	/// Settings Overlay
	const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
	const [distanceToTop, setDistanceToTop] = useState(0);
	const handleBackdropPress = useCallback(() => {
		setSettingsOverlayVisible(false);
	}, []);

	const handleAddTopic = () => {
		navigation.navigate(SCREEN.ADD_TOPIC);
	};

	const handleDeleteTopic = (id) => {
		deleteTopic(id);
		forceUpdate();
	};

	const handleEditTopic = (topic) => {
		navigation.navigate(SCREEN.EDIT_TOPIC, {
			id: topic.id,
			title: topic.title,
			description: topic.description,
		});
	};
	
	const handleViewTopic = (topicId) => {
		navigation.navigate(SCREEN.LIST_TOPIC_SENTENCE_NAVIGATOR, {
			screen: SCREEN.LIST_TOPIC_SENTENCE,
			params: {
				type: "topic",
				id: topicId
			},
		});
		
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
		<TouchableWithoutFeedback key={item.id} >
			<Topic
				title={item.title}
				description={item.description}
				onDelete={() => handleDeleteTopic(item.id)}
				onEdit={() => handleEditTopic(item)}
				onTouch={() => handleViewTopic(item.id)}
			/>
		</TouchableWithoutFeedback>
  	);

  	const filteredData = topicList.filter(item =>
    	item.title.toLowerCase().includes(searchText.toLowerCase())
  	);

	return (
		<View style={prepareStyles.container}>
			<View
				style={{ width: '100%', height: '100%', alignItems: 'center' }}
				onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
			>
				<ScreenHeader
					leftItem={backButton}
					title={'Chuẩn bị trước'}
					rightItem={settingsButton}
				/>
				{/* <SearchBar containerStyle={{marginTop: 5}}/> */}
				<View style={[{width: '90%'}, containerStyle={marginTop: 18}]}>
					{/* <DropShadow style={dropShadowProps}> */}
						<View style={{borderRadius: 25}}>
							<TempSearchBar
								// placeholder="Tìm kiếm"
								searchIcon={<Icon icon={SearchIcon}/>}
								clearIcon={clearIcon}
								cancelIcon={cancelIcon}
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
					{/* </DropShadow> */}
       			</View>
				<FlatList
						style={prepareStyles.contentContainer}
						data={filteredData}
						renderItem={renderItem}
						keyExtractor={item => item}
				/>
				<View style={prepareStyles.addBox}>
					<TouchableOpacity style={prepareStyles.iconBox} onPress={handleAddTopic}>
						<Icon icon={plusIcon} iconStyle={{ scale: 2, color: COLOR.TITLE }} />
					</TouchableOpacity>
				</View>
			</View>

			<SettingsOverlay.SlideInDown
				isVisible={settingsOverlayVisible}
				distanceToTop={distanceToTop}
				onBackdropPress={handleBackdropPress}
				// defaultFocusedId={sortOptionHeader.id}
				optionsHeaderList={[]}
			/>
		</View>
	);
}

const prepareStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.BACKGROUND,
		alignItems: 'center',
	},

	contentContainer: {
		flex: 1,
		width: '90%',
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
		position: 'absolute',
		bottom: 30,
		right: 30,
	},

	iconBox: {
		flex: 1,
		paddingLeft: 15,
		justifyContent: 'flex-end',
	},
});
