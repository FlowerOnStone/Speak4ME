/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
} from 'react-native';

import BaseFrame from '../../../../components/common/base-frame';
import SuggestionBox from '../../../../components/editor-screen/suggestionbox';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { ICON_CONSTANTS } from '../../../../constants/icon-constants';
import ScreenHeader from ',,/../../../components/common/screen-header';
import THEME from '../../../../constants/theme';
import STYLES from '../../../../constants/styles';
import { addPopularSentence } from '../../Data/popular-topic-data';
import { addSentence } from '../../Data/topic-data';
import TTS from '../../../../utils/TTS';

export default function AddSentence({ route, navigation }) {
	const [sentences, setSentences] = useState([]);

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);
	const [sentence, setSentence] = useState('');
	const handleChangeSentence = (newSentence) => {
		setSentence(newSentence);
	};

	const handleSave = () => {
		if (route.params.type == "popular_topic") {
			addPopularSentence(route.params.topicId, sentence);
		} else {
			addSentence(route.params.topicId, sentence);
		}
		navigation.goBack();
	};

	const handleClear = () => {
		setSentence('');
	};

	const handleSpeak = () => {
		TTS.Tts.speak(sentence);
	};

	return (
		<View style={STYLES.container}>
			<ScreenHeader title={route.params?.title || 'Title'} leftItem={backButton}/>
			<View style={styles.contentContainer}>
				<BaseFrame
				itemList={[
					<TouchableOpacity onPress={handleClear}>
						<Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSave}>
						<Icon name="plus-circle" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSpeak}>
						<Icon name="volume-up" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
					</TouchableOpacity>,
				]}
				>
				<TextInput
					onChangeText={handleChangeSentence}
					value={sentence}
					multiline={true}
					numberOfLines={10}
					style={styles.textInput}
					placeholder="Bạn hãy nhập văn bản..."
				/>
				</BaseFrame>
				<SuggestionBox change={handleChangeSentence} data={sentence}/>
			</View>
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
