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


import COLOR from '../../../constants/color';
import BaseFrame from '../../../components/common/base-frame';
import SuggestionBox from '../../../components/editor-screen/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import Icon from '../../../components/icons/icon-tag';
import binIcon from '../../../components/icons/bin-icon';
import saveIcon from '../../../components/icons/save-icon';
import ScreenHeader from '../../../components/common/screen-header';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import THEME from '../../../constants/theme';

export default function EditTopic(props) {

    const navigation = useNavigation();

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

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
        setTopic("");
    }
    const handleClearDescription = () => {
        setDescription("");
    }

    return (
		<>
		<ScreenHeader title="Sửa chủ đề" leftItem={backButton}/>
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<BaseFrame itemList={[
				<TouchableOpacity onPress={handleClearTopic}>
					<Icon icon={binIcon}/>
				</TouchableOpacity>]}>
				<TextInput
					onChangeText={handleChangeTopic}
					value={topic}
					multiline={true}
					numberOfLines={3}
					style={styles.textInput}
					placeholder="Bạn hãy nhập tên chủ đề..."
					/>
				</BaseFrame>
				<BaseFrame itemList={[
				<TouchableOpacity onPress={handleClearDescription}>
					<Icon icon={binIcon}/>
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
					<View style={{ marginRight: 10, marginLeft: 10 }}>
						<TouchableOpacity onPress={handleSave}>
							<Icon icon={saveIcon} />
						</TouchableOpacity>
					</View>
					<View style={{ marginRight: 10, marginLeft: 10 }}>
						<TouchableOpacity onPress={handleSave}>
							<Icon icon={binIcon} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
        </View>
		</>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.BACKGROUND,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentContainer: {
        flex: 1,
        color: 'red',
		width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
	},
	addButton: {
		width: "100%",
        display: "flex",
        flexDirection:"row-reverse",
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
