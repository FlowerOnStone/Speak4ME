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
	TextInput,
	Text,
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
import TTS from '../../../utils/TTS';
import { textOptionHeader } from '../../../components/common/settings-overlay/template-options-header';
import { shouldUseActivityState } from 'react-native-screens';
import STYLES from '../../../constants/styles';

export default function Editor(props) {

	const navigation = useNavigation();
	const [sentences, setSentences] = useState([]);
	const [sentence, setSentence] = useState('');
	const [fontSize, setFontSize] = useState(THEME.FONT_SIZE_SMALL);
	const [fontSizeValue, setFontSizeValue] = useState('' + fontSize);
	const [fontFamily, setFontFamily] = useState();
	const [fontColor, setFontColor] = useState(THEME.FONT_COLOR);
	const [fontColorValue, setFontColorValue] = useState(fontColor);

	const settingsDataList = [{
		id: 'text',
		optionsHeaderProps: {
			title: 'Văn bản',
		},
		checkboxListProps: {
			type: 'checkbox',
			checboxProps: {
				checkedIcon: null,
				uncheckedIcon: null,
			},
			defaultCheckedItems: ['color'],
			itemList: [
				{
					id: 'color',
					content: <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: -10}}>
						<Text style={{fontSize: THEME.FONT_SIZE_SMALL, marginRight: 10}}>Màu sắc:</Text>
						<View style={{width: THEME.FONT_SIZE_SMALL, height: THEME.FONT_SIZE_SMALL, backgroundColor: fontColor, marginRight: 5}}/>
						<TextInput
						onChangeText={(text) => setFontColorValue(text)}
						value={fontColorValue}
						style={{fontSize: THEME.FONT_SIZE_SMALL, borderWidth: 0, paddingVertical: 0, borderColor: 'gray'}}
						onEndEditing={() => {setFontColor(fontColorValue)}}
						/>
					</View>,
				},
				{
					id: 'font-size',
					content: <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: -10}}>
						<Text style={{fontSize: THEME.FONT_SIZE_SMALL, marginRight: 10}}>Kích cỡ:</Text>
						<TextInput
						onChangeText={(text) => setFontSizeValue(text)}
						value={fontSizeValue}
						style={{fontSize: THEME.FONT_SIZE_SMALL, paddingVertical: 0}}
						onEndEditing={() => {setFontSize(Number.parseInt(fontSizeValue, 10))}}
						/>
					</View>,
				},
				// {
				// 	id: 'font-family',
				// 	content: <Text style={{ fontSize: THEME.FONT_SIZE_SMALL }}>Từ điển</Text>,
				// },
			],
		},
	}];

	/// Header
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

	const handleChangeSentence = (newSentence) => {
		setSentence(newSentence);
		// console.log(newSentence);
	};

	const handleSave = () => {
		// Nếu câu hiện tại không rỗng, thêm câu hiện tại vào mảng sentences
		if (sentence !== '') {
			setSentences([sentence, ...sentences]);
		}
		TTS.Tts.speak(sentence);
		// console.log(sentence);
	};
	const handleViewHistory = () => {
		navigation.navigate(SCREEN.HISTORY, { sentences });
	};

	const handleViewPopularSentences = () => {
		navigation.navigate(SCREEN.POPULAR_SENTENCES);
	};
	return (
		<View style={STYLES.container}>
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
					<BaseFrame
					itemList={[
						<TouchableOpacity onPress={handleViewPopularSentences}>
							<Icon icon={popularSentencesIcon} />
						</TouchableOpacity>,
						<TouchableOpacity onPress={handleViewHistory}>
							<Icon icon={historyIcon} />
						</TouchableOpacity>,
						<TouchableOpacity onPress={handleSave}>
							<Icon icon={speakIcon} />
						</TouchableOpacity>]}
					>
						<TextInput
							onChangeText={handleChangeSentence}
							value={sentence}
							multiline={true}
							numberOfLines={10}
							style={{fontSize, fontFamily, color: fontColor}}
							placeholder="Bạn muốn nói gì..."
						/>
					</BaseFrame>
					<SuggestionBox />
				</View>
			</View>
			<SettingsOverlay.SlideInDown
				isVisible={settingsOverlayVisible}
				distanceToTop={distanceToTop+50}
				onBackdropPress={handleBackdropPress}
				defaultFocusedId={settingsDataList[0].id}
				optionsHeaderList={settingsDataList}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		...STYLES.contentContainer,
		width: '90%',
	},
	paragraph: {
		flex: 10,
	},
	suggestionbox: {
		flex: 1,
	},
	textInput: {
		fontSize: 20,
	},
});
