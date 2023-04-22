import { View, Text, TouchableOpacity } from 'react-native';
import { Clipboard, Alert } from 'react-native';

import React, { useEffect } from 'react';

import styles from './style';
import Icon from '../../icons/icon-tag';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';

import TTS from '../../../utils/TTS';
import UpRightBorder from '../up-right-border';
import BaseFrame from '../base-frame';

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
            <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                <Icon icon={copyIcon} />
            </TouchableOpacity>,
            <TouchableOpacity style={styles.iconBox} onPress={() => handleSpeakButtonClick()}>
                <Icon icon={speakIcon} />
            </TouchableOpacity>
        ]}><Text style={styles.text}>{props.text}</Text></BaseFrame>
    );
};

export default Sentence;
