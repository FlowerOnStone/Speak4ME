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

import Icon from '../../../../components/icons/icon-tag';
import speakIcon from '../../../../components/icons/speak-icon';
import plusIcon from '../../../../components/icons/plus-icon';
import binIcon from '../../../../components/icons/bin-icon';
import { SCREEN } from '../../../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from ',,/../../../components/common/screen-header';
import THEME from '../../../../constants/theme';
import STYLES from '../../../../constants/styles';
import { addPopularSentence } from '../../Data/popular-topic-data';
import TTS from '../../../../utils/TTS';

export default function AddSentence({ route, navigation }) {
	const [sentences, setSentences] = useState([]);

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);
	const [sentence, setSentence] = useState('');
	const handleChangeSentence = (newSentence) => {
		setSentence(newSentence);
	};

	const handleSave = () => {
		if (route.params.type == "popular_topic") {
			addPopularSentence(route.params.topicId, sentence);
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
						<Icon icon={binIcon} />
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSave}>
						<Icon icon={plusIcon} />
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSpeak}>
						<Icon icon={speakIcon} />
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
