/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import parseColor from 'parse-color';
import HistorySentence from '../../../components/common/historySentence';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import { SearchBar as TempSearchBar } from '@rneui/themed';
import STYLES from '../../../constants/styles';
import styles from '../../../components/common/search-bar/styles';
import { getTexts } from '../Data/history-data';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

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
			<Icon name="cog" size={ICON_CONSTANTS.MEDIUM_SIZE} color='black' solid/>
		</TouchableOpacity>
	);
	const [backButton] = useState(
		// console.log("Value of temp is now: " + getTexts().length),
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" size={ICON_CONSTANTS.MEDIUM_SIZE} color='black' solid/>
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
								searchIcon={<Icon name="search" size={ICON_CONSTANTS.NORMAL_SIZE} color='black' solid/>}
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
				<FlatList
					style={historyStyles.scroll}
					data={filteredData}
					renderItem={renderItem}
					keyExtractor={item => item}
				/>
			</View>
			<SettingsOverlay.SlideInDown
				isVisible={settingsOverlayVisible}
				distanceToTop={distanceToTop}
				onBackdropPress={handleBackdropPress}
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
