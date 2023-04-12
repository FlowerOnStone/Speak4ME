import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';
import { Icon } from '../icons/icon-tag';
import editIcon from '../icons/edit-icon';
import copyIcon from '../icons/copy-icon';
import speakIcon from '../icons/speak-icon';
import binIcon from '../icons/bin-icon';
import plusIcon from '../icons/plus-icon';
import moreOptionsIcon from '../icons/more-options-icon';

const Topic = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.textBox}>  
            <View style={styles.topicContainer}>
                <Text style={styles.topicText}>Chủ đề 1</Text>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={editIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.sentenceContainer}>
            <View style={styles.sentence}>
                    <Text style={styles.sentenceText}>Xin chào</Text>
                </View>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={speakIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={copyIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.sentenceContainer}>
                <View style={styles.sentence}>
                    <Text style={styles.sentenceText}>Bạn khỏe không</Text>
                </View>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={speakIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={copyIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.sentenceContainer}>
                <View style={styles.sentence}>
                    <Text style={styles.sentenceText}>Bạn khỏe không</Text>
                </View>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={speakIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={copyIcon} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <View style={styles.addBox}>
            <View style={styles.blankBox}>
            </View>
            <View style={styles.itemBox}>
                <View style={styles.backgroundBox}>
                    <View style={styles.cycleBox}>
                          
                    </View>
                </View>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={binIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={plusIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                    <Icon icon={moreOptionsIcon} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Topic;