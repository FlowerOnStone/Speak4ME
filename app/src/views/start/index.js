import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';
import { SCREEN } from '../../constants/screen';
import STYLES from '../../constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function StartScreen({ route, navigation }) {
	// const { username } = route.params;

	const handleLogin = () => {
		// Call API to authenticate user
		navigation.navigate(SCREEN.LOGIN);
	};

	const handleRegister = () => {
		// Call API to register user
		navigation.navigate(SCREEN.REGISTER);
	};

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.textHeader}>
				Speak4ME
				</Text>
			</View>
			<View style= {styles.body}>
				<TouchableOpacity onPress={handleLogin} style={STYLES.greenButton}>
					<Text style= {STYLES.greenButtonText}>
						{'Đăng nhập'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleRegister} style={STYLES.greenButton}>
					<Text style={STYLES.greenButtonText}>
						{'Đăng ký'}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	textHeader: {
		color: '#000000',
		marginTop: 100,
		fontSize: 70,
		textAlign: 'center',
	},
	body: {
		marginTop: 130,
		alignItems: "center",
		justifyContent: "center"
	},
});
