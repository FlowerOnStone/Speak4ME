import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style'
import { Icon } from '../icons/icon-tag'
import copyIcon from '../icons/copy-icon'
import speakIcon from '../icons/speak-icon'


const Sentence = (props) => {
    const handleCopyClick = () => {
    };
    const handleSpeakButtonClick = () => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.addBox}>
                <View style={styles.blankBox}>
                </View>
                <View style={styles.itemBox}>
                    <View style={styles.backgroundBox}>
                        <View style={styles.cycleBox}>

                        </View>
                    </View>
                    
                    <TouchableOpacity style={styles.iconBox} onPress={handleCopyClick}>
                        <Icon icon={copyIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox} onPress={handleSpeakButtonClick}>
                        <Icon icon={speakIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Sentence;