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
  TextInput
} from 'react-native';


import COLOR from '../constants/color';
import BaseFrame from '../components/common/base-frame';
import SuggestionBox from '../components/editor-screen/suggestionbox';

import { useNavigation } from '@react-navigation/native';
import Icon from '../components/icons/icon-tag';
import saveIcon from '../components/icons/save-icon';
import binIcon from '../components/icons/bin-icon';

export default function AddPopularTopic(props) {

    const navigation = useNavigation();
  
    const [topic, setTopic] = useState('');
    const handleChangeTopic = (newTopic) => {
        setTopic(newTopic);
        console.log(newTopic);
    };

    const handleSave = () => {
        console.log(topic);
    };

    const handleClear = () => {
        setTopic("");
    }

    return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<BaseFrame itemList={[
				<TouchableOpacity onPress={handleClear}>
					<Icon icon={binIcon}/>
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
	            <SuggestionBox />
			</View>
        </View>
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
        width:'90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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
