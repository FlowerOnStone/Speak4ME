import { View, Text, TouchableOpacity } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useEffect } from 'react';

import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TTS from '../../../utils/TTS';
import BaseFrame from '../base-frame';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';
const HistorySentence = (props) => {

    useEffect(() => {
        TTS.initTTS();
    }, []);

    const handleCopyClick = () => {
        Clipboard.setString(props.text);
        Alert.alert('Copy thành công vào clipboard');
    };
    const handleSpeakButtonClick = () => {
        TTS.Tts.speak(props.text);
    };

    return (
        <BaseFrame itemList={[
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
				<Icon name="copy" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={() => handleSpeakButtonClick()}>
				<Icon name="volume-up" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>
        ]}><Text style={styles.text}>{props.text}</Text></BaseFrame>
    );
};

export default HistorySentence;
