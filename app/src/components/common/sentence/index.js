import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useEffect } from 'react';

import Icon from '../../icons/icon-tag';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';

import TTS from '../../../utils/TTS';
import BaseFrame from '../base-frame';
import editIcon from '../../icons/edit-icon';
import COLOR from '../../../constants/color';
import binIcon from '../../icons/bin-icon';

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
                <Icon icon={binIcon} />
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon icon={copyIcon} />
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={props.onEdit}>
                <Icon icon={editIcon} />
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={props.onSpeak}>
                <Icon icon={speakIcon} />
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
