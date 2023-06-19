/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import COLOR from '../../../constants/color';
import HistorySentence from '../../../components/common/historySentence';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from '../../../components/icons/icon-tag';
import { settingsIcon } from '../../../components/icons/settings-icon';
import THEME from '../../../constants/theme';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import SearchBar from '../../../components/common/search-bar';
import STYLES from '../../../constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function History({ route, navigation }) {

	const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('darkMode').then(storedDarkMode => {
      if (storedDarkMode !== null) {
        setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
      }
    });
    console.log("history screen" + darkMode);
  }, []);

	const { sentences = [] } = route.params ?? {};

	// console.log(route.params);
	const [searchText, setSearchText] = useState('');
	/// Header
	const [settingsButton] = useState(
		<TouchableOpacity onPress={() => setSettingsOverlayVisible(true)}>
		<Icon icon={settingsIcon} iconStyle={{ scale: 0.8 }} />
		</TouchableOpacity>
	);
	const [backButton] = useState(
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
		<View style={[STYLES.container, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
			<View
				style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: darkMode === true ? 'black' : 'white' }}
				onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
			>
				<ScreenHeader
					leftItem={backButton}
					title={'Lịch sử nói'}
					rightItem={settingsButton}
				/>
				<SearchBar containerStyle={{marginTop: 5}}/>
				<ScrollView style={[styles.scroll, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
					{
					sentences.length > 0 && sentences.map((sentence, index) => (
						<HistorySentence key={index} text={sentence} darkMode={darkMode} />
					))}
				</ScrollView>
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


const styles = StyleSheet.create({
	contentContainer: {
		...STYLES.contentContainer,
		height: '80%',
	},
	scroll: {
		marginHorizontal: '5%',
		width: '90%',
	},
});
