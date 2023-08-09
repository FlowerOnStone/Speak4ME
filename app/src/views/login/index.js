import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import { SCREEN } from '../../constants/screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../components/common/screen-header';
import { ICON_CONSTANTS } from '../../constants/icon-constants';
import STYLES from '../../constants/styles';

export default function LoginScreen({ route, navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Call API to authenticate user
		navigation.navigate(SCREEN.HOME_NAVIGATOR, {
            screen: SCREEN.HOME,
            params: {
                username,
            },
        });
	};

	const handleForgotPassword = () => {
		navigation.navigate(SCREEN.FORGOT_PASSWORD);
	};

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);

	return (
		<View style={STYLES.container}>
			<ScreenHeader
				leftItem={backButton}
				title={'Đăng nhập'}
			/>
			<View style={STYLES.contentContainer}>
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={username}
					onChangeText={text => setUsername(text)}
					placeholder="Tên đăng nhập"
				/>
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={password}
					onChangeText={text => setPassword(text)}
					placeholder="Mật khẩu"
					secureTextEntry={true}
				/>
				<View style= {styles.forgotPassword}>
					<Text style= {styles.forgotQuestion}>
						*Quên mật khẩu?
					</Text>
					<TouchableOpacity onPress={handleForgotPassword}>
						<Text style= {styles.redForgotPassword}>
							Nhấn vào đây
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={handleLogin } style={STYLES.greenButton}>
					<Text style= {STYLES.greenButtonText}>
						{'Đăng nhập'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		marginBottom: 16,
	},
	forgotPassword: {
		display: 'flex',
		flexDirection: 'row',
		width: '90%',
		marginLeft: 15,
	},
	forgotQuestion: {
		fontSize: 18,
	},
	redForgotPassword: {
		fontSize: 18,
		marginLeft: 5,
		color: 'red',
	},
});
