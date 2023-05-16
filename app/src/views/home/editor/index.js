/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useState } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput
} from 'react-native';


import COLOR from '../../../constants/color';
import BaseFrame from '../../../components/common/base-frame';
import SuggestionBox from '../../../components/editor-screen/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import Icon from '../../../components/icons/icon-tag';
import speakIcon from '../../../components/icons/speak-icon';
import historyIcon from '../../../components/icons/history-icon';
import popularSentencesIcon from '../../../components/icons/popular-sentences-icon';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import { settingsIcon } from '../../../components/icons/settings-icon';
import THEME from '../../../constants/theme';
import SettingsOverlay from '../../../components/common/settings-overlay';
import ScreenHeader from '../../../components/common/screen-header';
import { SCREEN } from '../../../constants/screen';
import { Text } from 'react-native-svg';

export default function Editor(props) {

	const navigation = useNavigation();
	const [sentences, setSentences] = useState([]);
	const [sentence, setSentence] = useState('');

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

	const handleChangeSentence = (newSentence) => {
		setSentence(newSentence);
		// console.log(newSentence);
	};

	const handleSave = () => {
		// Nếu câu hiện tại không rỗng, thêm câu hiện tại vào mảng sentences
		if (sentence !== '') {
			setSentences([sentence, ...sentences]);
		}
		// console.log(sentence);
	};
	const handleViewHistory = () => {
		navigation.navigate('HistoryScreen', { sentences });
	};

	const handleViewPopularSentences = () => {
		navigation.navigate(SCREEN.POPULAR_SENTENCES);
	};
	return (
		<View style={styles.container}>
			<View
				style={{ width: '100%', height: '100%', alignItems: 'center' }}
				onLayout={(event) => { setDistanceToTop(event.nativeEvent.layout.height); }}
			>
				<ScreenHeader
					leftItem={backButton}
					title={'Soạn thảo'}
					rightItem={settingsButton}
				/>
				<View style={styles.contentContainer}>
					<BaseFrame itemList={[<TouchableOpacity onPress={handleViewPopularSentences}>
						<Icon icon={popularSentencesIcon} />
					</TouchableOpacity>, <TouchableOpacity onPress={handleViewHistory}>
						<Icon icon={historyIcon} />
					</TouchableOpacity>, <TouchableOpacity onPress={handleSave}>
						<Icon icon={speakIcon} />
						</TouchableOpacity>]}>
						<TextInput
							onChangeText={handleChangeSentence}
							value={sentence}
							multiline={true}
							numberOfLines={10}
							style={styles.textInput}
							placeholder="Bạn muốn nói gì..."
						/>
					</BaseFrame>
					<SuggestionBox />
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.BACKGROUND,
		alignItems: 'center',
		justifyContent: 'center',
	},
	contentContainer: {
		flex: 1,
		color: 'red',
		width: '90%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: 'yellow'
	},
	paragraph: {
		flex: 10,
	},
	suggestionbox: {
		flex: 1,
	},
	textInput: {

		fontSize: 20,
	}
});
