/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';
import {
	ScrollView,
	TextInput,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	FlatList
} from 'react-native';
import SearchIcon from '../../../components/icons/search-icon';
import { useNavigation } from '@react-navigation/native';
import parseColor from 'parse-color';
import COLOR from '../../../constants/color';
import HistorySentence from '../../../components/common/historySentence';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from '../../../components/icons/icon-tag';
import { settingsIcon } from '../../../components/icons/settings-icon';
import THEME from '../../../constants/theme';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
// import SearchBar from '../../../components/common/search-bar';
import { SearchBar as TempSearchBar } from '@rneui/themed';
import STYLES from '../../../constants/styles';
import styles from '../../../components/common/search-bar/styles';
import { addText, getTexts } from '../Data/history-data';

export default function History() {

	const navigation = useNavigation();
	const dropShadowProps = {
		'shadowOffset': {
			'width': 0,
			'height': 3,
		},
		'shadowRadius': 2,
		'shadowColor': parseInt(parseColor('rgba(0, 0, 0, 0.25)').hex.substring(1), 16),
		'shadowOpacity': 0.2,
	};

	const clearIcon = {
		size: THEME.FONT_SIZE_SMALL,
	};
	
	const cancelIcon = {
		type: 'font-awesome',
		size: THEME.FONT_SIZE_SMALL,
		name: 'angle-left',
	};

	// const { sentences = [] } = route.params ?? {};
	// console.log(route.params);
	const [searchText, setSearchText] = useState("");

  	const renderItem = ({ item }) => (
		<HistorySentence text={item} />
    	// <Text style={styles.item}>{item.text}</Text>
  	);

  	const filteredData = getTexts().filter(item =>
    	item.toLowerCase().includes(searchText.toLowerCase())
  	);


	/// Header
	const [settingsButton] = useState(
		<TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
		<Icon icon={settingsIcon} iconStyle={{ scale: 0.8 }} />
		</TouchableOpacity>
	);
	const [backButton] = useState(
		// console.log("Value of temp is now: " + getTexts().length),
		<TouchableOpacity onPress={() => navigation.goBack()}>
		<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);
	/// Settings Overlay
	const [settingsOverlayVisible, setSettingsOverlayVisible] = useState(false);
	const [distanceToTop, setDistanceToTop] = useState(0);
	const handleBackdropPress = useCallback(() => {
		setSettingsOverlayVisible(false);
	}, []);

	const handleSearch = (text) => {
		setSearchText(text); // Lưu trữ giá trị của thanh tìm kiếm khi người dùng nhập vào
		// Thực hiện hoạt động tìm kiếm dựa trên searchText ở đây
	};


	return (
		<View style={STYLES.container}>
			<View
				style={{ width: '100%', height: '100%', alignItems: 'center' }}
				onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
			>
				<ScreenHeader
					leftItem={backButton}
					title={'Lịch sử nói'}
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
				{/* <ScrollView style={historyStyles.scroll}> */}
					<FlatList
						style={historyStyles.scroll}
						data={filteredData}
						renderItem={renderItem}
						keyExtractor={item => item}
					/>
				{/* </ScrollView> */}
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


const historyStyles = StyleSheet.create({
	contentContainer: {
		...STYLES.contentContainer,
		height: '80%',
	},
	scroll: {
		marginTop: 8,
		marginHorizontal: '5%',
		width: '90%',
	},
});
