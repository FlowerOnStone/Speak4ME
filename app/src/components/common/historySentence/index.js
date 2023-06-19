import { View, Text, TouchableOpacity } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useEffect } from 'react';

import styles from './style';
import Icon from '../../icons/icon-tag';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';

import TTS from '../../../utils/TTS';
import BaseFrame from '../base-frame';
import binIcon from '../../icons/bin-icon';

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
        <BaseFrame style={{background: props.darkMode === true ? "black" : "white"}} itemList={[
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon icon={binIcon} />
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon icon={copyIcon} />
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={() => handleSpeakButtonClick()}>
                <Icon icon={speakIcon} />
            </TouchableOpacity>
        ]}><Text style={styles.text}>{props.text}</Text></BaseFrame>
    );
};

export default HistorySentence;
