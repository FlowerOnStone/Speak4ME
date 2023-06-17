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


import COLOR from '../../../constants/color';
import BaseFrame from '../../../components/common/base-frame';
import SuggestionBox from '../../../components/editor-screen/suggestionbox';

import Icon from '../../../components/icons/icon-tag';
import saveIcon from '../../../components/icons/save-icon';
import binIcon from '../../../components/icons/bin-icon';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import { addPopularTopic } from '../Data/popular-topic-data';
import { SCREEN } from '../../../constants/screen';

export default function AddPopularTopic({ route, navigation }) {

    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black'/>
        </TouchableOpacity>
    );
	const [topic, setTopic] = useState('');
	const handleChangeTopic = (newTopic) => {
		setTopic(newTopic);
		// console.log(newTopic);
	};

	const handleSave = () => {
		addPopularTopic(topic);
		navigation.navigate(SCREEN.POPULAR_SENTENCES)
	};

	const handleClear = () => {
		setTopic('');
	};

    return (
        <View styles={STYLES.container}>
            <ScreenHeader
                leftItem={backButton}
                title={'Thêm chủ đề thông dụng'}
            />
			<View style={styles.contentContainer}>
				<BaseFrame itemList={[
					<TouchableOpacity onPress={handleClear}>
						<Icon icon={binIcon} />
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSave}>
						<Icon icon={saveIcon} />
					</TouchableOpacity>]}>
					<TextInput
						onChangeText={handleChangeTopic}
						value={topic}
						multiline={true}
						numberOfLines={5}
						style={styles.textInput}
						placeholder="Bạn hãy nhập tên chủ đề..."
					/>
				</BaseFrame>
				<SuggestionBox change={handleChangeTopic} data={topic}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		...STYLES.contentContainer,
		paddingHorizontal: "5%",
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
