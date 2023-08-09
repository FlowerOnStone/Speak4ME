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

import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import { addPopularTopic } from '../Data/popular-topic-data';
import { SCREEN } from '../../../constants/screen';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

export default function AddPopularTopic({ route, navigation }) {

    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={ICON_CONSTANTS.MEDIUM_SIZE} color={ICON_CONSTANTS.BLACK_COLOR} solid/>
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
        			    <Icon name="trash" size={ICON_CONSTANTS.NORMAL_SIZE} color={ICON_CONSTANTS.BLACK_COLOR} solid/>
					</TouchableOpacity>,
					<TouchableOpacity onPress={handleSave}>
		            	<Icon name="save" size={ICON_CONSTANTS.NORMAL_SIZE} color={ICON_CONSTANTS.BLACK_COLOR} solid/>
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
