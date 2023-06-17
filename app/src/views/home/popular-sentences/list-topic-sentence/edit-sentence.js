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
	SafeAreaView
} from 'react-native';


import COLOR from '../../../../constants/color';
import BaseFrame from '../../../../components/common/base-frame';
import SuggestionBox from '../../../../components/editor-screen/suggestionbox';

import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from '../../../../components/icons/icon-tag';
import speakIcon from '../../../../components/icons/speak-icon';
import saveIcon from '../../../../components/icons/save-icon';
import binIcon from '../../../../components/icons/bin-icon';
import { SCREEN } from '../../../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from ',,/../../../components/common/screen-header';
import THEME from '../../../../constants/theme';
import STYLES from '../../../../constants/styles';

export default function EditSentence(props) {
	const navigation = useNavigation();
	const route = useRoute();
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);
	const [sentences, setSentences] = useState([]);

	const [sentence, setSentence] = useState('');

	const handleChangeSentence = (newSentence) => {
		setSentence(newSentence);
		//   console.log(newSentence);
	};

	const handleSave = () => {
		// Nếu câu hiện tại không rỗng, thêm câu hiện tại vào mảng sentences
		if (sentence !== '') {
			setSentences([sentence, ...sentences]);
		}
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
			<ScreenHeader
				leftItem={backButton}
				title={"Sửa văn bản"}
			/>
			<View style={styles.contentContainer}>
				<BaseFrame itemList={[
					<TouchableOpacity onPress={handleViewPopularSentences}>
						<Icon icon={binIcon} />
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleViewHistory}>
						<Icon icon={saveIcon} />
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSave}>
						<Icon icon={speakIcon} />
					</TouchableOpacity>]}>
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
	container: {
		backgroundColor: COLOR.BACKGROUND,
		alignItems: 'center',
		justifyContent: 'center',
		height: "93%"
	},
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
	}
});
