import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../components/home/style'
import Task from '../components/home/Task'
import Header from '../components/home/Header'

export default function Home() {
    return (
        <View style={styles.container}>
            <Header>

            </Header>
            <Task>

            </Task>
        </View>
    )
}