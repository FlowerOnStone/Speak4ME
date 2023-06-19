/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
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
import SuggestionBox from '../../../components/editor-screen/suggestionbox';

import Icon from '../../../components/icons/icon-tag';
import binIcon from '../../../components/icons/bin-icon';
import plusIcon from '../../../components/icons/plus-icon';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddTopic({ route, navigation }) {


	const [topic, setTopic] = useState('');
	const [description, setDescription] = useState('');

	const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('darkMode').then(storedDarkMode => {
      if (storedDarkMode !== null) {
        setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
      }
    });
    console.log("history screen" + darkMode);
  }, []);

	const handleChangeTopic = (newTopic) => {
		setTopic(newTopic);
		// console.log(newTopic);
	};
	const handleChangeDescription = (newDescription) => {
		setDescription(newDescription);
		// console.log(newDescription);
	};

	const handleSave = () => {
		// console.log(topic);
	};

	const handleClearTopic = () => {
		setTopic('');
	};
	const handleClearDescription = () => {
		setDescription('');
	};
    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
        </TouchableOpacity>
    );
	return (
		<View style={[STYLES.container, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
            <ScreenHeader
                leftItem={backButton}
                title={'Thêm chủ đề'}
            />
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems:"center", backgroundColor: darkMode === true ? 'black' : 'white' }} style={styles.container}>
				<View style={[styles.contentContainer, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
					<BaseFrame itemList={[
						<TouchableOpacity onPress={handleClearTopic}>
							<Icon icon={binIcon} />
						</TouchableOpacity>]}>
						<TextInput
							onChangeText={handleChangeTopic}
							value={topic}
							multiline={true}
							numberOfLines={2}
							style={styles.textInput}
							placeholder="Bạn hãy nhập tên chủ đề..."
						/>
					</BaseFrame>
					<BaseFrame itemList={[
						<TouchableOpacity onPress={handleClearDescription}>
							<Icon icon={binIcon} />
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
					<SuggestionBox />
					<View style={styles.addButton}>
						<TouchableOpacity onPress={handleSave}>
							<Icon icon={plusIcon} iconStyle={{ scale: 2, }}/>
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
