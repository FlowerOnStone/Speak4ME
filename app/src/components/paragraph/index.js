import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


import styles from './style'
import { Icon } from '../icons/icon-tag'
import historyIcon from '../icons/history-icon'
import popularSentenceIcon from '../icons/popular-sentences-icon'
import speakIcon from '../icons/speak-icon'


const Paragraph = (props) => {
    const handleViewHistoryClick = () => {
        props.onViewHistoryClick();
    };
    const handleViewCommonClick = () => {
        props.onViewCommonClick();
    };

    const [text, setText] = useState('');
    const handleSpeakButtonClick = () => {
        if(text.length === 0) { 
            alert("Bạn vui lòng nhập câu nói để phát âm thanh"); 
            return false;
        }
        props.onSpeakButtonClick(text);
        setText('');
        Keyboard.dismiss();
    }

    const handleChangeText = (newText) => {
        setText(newText);
      };

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <TextInput
                    onChangeText={handleChangeText}
                    value={text}
                    placeholder='Bạn muốn nói gì...'
                />
            </View>
            <View style={styles.addBox}>
                <View style={styles.blankBox}>
                </View>
                <View style={styles.itemBox}>
                    <View style={styles.backgroundBox}>
                        <View style={styles.cycleBox} />
                    </View>
                    <TouchableOpacity style={styles.iconBox} onPress={handleViewHistoryClick}>
                        <Icon icon={historyIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox} onPress={handleViewCommonClick}>
                        <Icon icon={popularSentenceIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox} onPress={handleSpeakButtonClick}>
                        <Icon icon={speakIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Paragraph;