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
	SafeAreaView,
	ScrollView
} from 'react-native';
import COLOR from '../../../constants/color';
import BaseFrame from '../../../components/common/base-frame';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import { addTopic } from '../Data/topic-data';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

export default function AddTopic({ route, navigation }) {


	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);

	const handleChangeTitle = (newTitle) => {
		setTitle(newTitle);
	};
	const handleChangeDescription = (newDescription) => {
		setDescription(newDescription);
	};

	const handleSave = () => {
		addTopic(title, description);
		navigation.goBack();
	};

	const handleClearTopic = () => {
		setTitle('');
	};
	const handleClearDescription = () => {
		setDescription('');
	};
	return (
		<View style={STYLES.container}>
            <ScreenHeader
                leftItem={backButton}
                title={'Thêm chủ đề'}
            />
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems:"center" }} style={styles.container}>
				<View style={styles.contentContainer}>
					<BaseFrame itemList={[
						<TouchableOpacity onPress={handleClearTopic}>
							<Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
						</TouchableOpacity>]}>
						<TextInput
							onChangeText={handleChangeTitle}
							value={title}
							multiline={true}
							numberOfLines={2}
							style={styles.textInput}
							placeholder="Bạn hãy nhập tên chủ đề..."
						/>
					</BaseFrame>
					<BaseFrame itemList={[
						<TouchableOpacity onPress={handleClearDescription}>
							<Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
						</TouchableOpacity>]}>
						<TextInput
							onChangeText={handleChangeDescription}
							value={description}
							multiline={true}
							numberOfLines={4}
							style={styles.textInput}
							placeholder="Bạn hãy nhập mô tả về chủ đề..."
						/>
					</BaseFrame>
					<View style={styles.addButton}>
						<TouchableOpacity onPress={handleSave}>
							<Icon name="plus-circle" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOR.BACKGROUND,
		height: "93%",
	},
	contentContainer: {
		...STYLES.contentContainer,
		width: "90%",
	},
	addButton: {
		width: '100%',
		alignItems: 'flex-end',
		height: 100,
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
