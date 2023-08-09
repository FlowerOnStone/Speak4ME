import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useEffect } from 'react';


import TTS from '../../../utils/TTS';
import BaseFrame from '../base-frame';
import COLOR from '../../../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

const Sentence = (props) => {

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
            <TouchableOpacity style={styles.iconBox} onPress={props.onDelete}>
                <Icon name="trash" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon name="copy" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={props.onEdit}>
                <Icon name="edit" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={props.onSpeak}>
                <Icon name="volume-up" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.NORMAL_SIZE} solid/>
            </TouchableOpacity>
        ]}><Text style={styles.text}>{props.text}</Text></BaseFrame>
    );
};

const styles = StyleSheet.create({
    text: {
        color: COLOR.TEXT,
        fontSize: 15,
    },
});

export default Sentence;
