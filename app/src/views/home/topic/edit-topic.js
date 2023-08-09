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
import { ICON_CONSTANTS } from '../../../constants/icon-constants';
import STYLES from '../../../constants/styles';
import { changeTopic } from '../Data/topic-data';

export default function EditTopic({route, navigation}) {
	console.log(route);
	const [title, setTitle] = useState(route.params.title);
	const [description, setDescription] = useState(route.params.description);

	const handleChangeTitle = (newTitle) => {
		setTitle(newTitle);
	};
	const handleChangeDescription = (newDescription) => {
		setDescription(newDescription);
	};

	const handleSave = () => {
		changeTopic(route.params.id, title, description);
		navigation.goBack();
	};

	const handleClearTopic = () => {
		setTitle("");
	}
	const handleClearDescription = () => {
		setDescription("");
	}
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);
	return (
		<View style={STYLES.container}>
            <ScreenHeader
                leftItem={backButton}
                title={'Sửa chủ đề'}
            />
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }} style={styles.container}>
				<View style={styles.contentContainer}>
					<BaseFrame itemList={[
					<TouchableOpacity onPress={handleClearTopic}>
						<Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
					</TouchableOpacity>]}>
					<TextInput
						onChangeText={handleChangeTitle}
						value={title}
						multiline={true}
						numberOfLines={3}
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
						<View style={{ marginRight: 10, marginLeft: 10 }}>
							<TouchableOpacity onPress={handleSave}>
								<Icon name="save" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
							</TouchableOpacity>
						</View>
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
		width:"90%"
	},
	addButton: {
		width: '100%',
		height: 100,
		flexDirection: "row",
		justifyContent: "flex-end"
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
