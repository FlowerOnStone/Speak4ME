import { View } from 'react-native'

import React from 'react';

import styles from './style';

const UpRightBorder = (props) => {
    return (
        <View style={styles.backgroundBox}>
            <View style={styles.cycleBox}>
                <View style={styles.backgroundCycleBox}></View>
            </View>
        </View>
    );
};

export default UpRightBorder;
