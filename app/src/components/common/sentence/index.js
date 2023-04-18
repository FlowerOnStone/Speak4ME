import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Clipboard, Alert } from 'react-native';

import React, { useState, useEffect } from 'react';

import styles from './style';
import Icon from '../../icons/icon-tag';
import copyIcon from '../../icons/copy-icon';
import speakIcon from '../../icons/speak-icon';

import TTS from '../../../utils/TTS';
import UpRightBorder from '../up-right-border';


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
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.addBox}>
                <View style={styles.blankBox} />
                <View style={styles.itemBox}>
                    <UpRightBorder />

                    <TouchableOpacity style={styles.iconBox} onPress={() => handleSpeakButtonClick()}>
                        <Icon icon={speakIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                        <Icon icon={copyIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Sentence;
