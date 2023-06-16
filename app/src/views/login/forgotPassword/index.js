import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import color from '../../../constants/color'
import { SCREEN } from '../../../constants/screen';
import GoogleIcon from '../../../components/icons/google-icon';
import Icon from '../../../components/icons/icon-tag';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';

export default function ForgotPasswordScreen({ route, navigation }) {
	const [email, setEmail] = useState('');
	const [emailWarning, setEmailWarning] = useState('');
	const [isValidationEmail, setIsValidationEmail] = useState(false);

	const validationEmail = () => {
		if (email.length == 0) {
			setIsValidationEmail(false);
			setEmailWarning("Bạn chưa nhập email");
			return false;
		}
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (regex.test(email) == false) {
			setIsValidationEmail(false);
			setEmailWarning("Email không hợp lệ");
			return false;
		} 
		setIsValidationEmail(true);
		return true;
	}

	const handleSubmit = () => {
		if (!validationEmail()) {
			return;
		}
		navigation.navigate(SCREEN.VERIFY_FORGOT_PASSWORD);
	}

	const handleRegister = () => {
		navigation.navigate(SCREEN.REGISTER);
	}

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);

	return (
		<View style={STYLES.container}>
			<ScreenHeader
				leftItem={backButton}
				title={'Quên mật khẩu'}
			/>
			<View style={STYLES.contentContainer}>
				<Text style={styles.title}>
					Nhập địa chỉ email
				</Text>
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={email}
					onChangeText={text => setEmail(text)}
					onTextInput={() => setIsValidationEmail(true)}
					onEndEditing={validationEmail}
					placeholder="email"
				/>
				{
					!isValidationEmail &&
					<Text style={STYLES.errorTextbox}>
						{emailWarning}
					</Text>
				}
				<TouchableOpacity>
					<Text style={styles.backToLogin}>
						Quay lại đăng nhập
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={STYLES.greenButton} onPress={handleSubmit}>
					<Text style={STYLES.greenButtonText}>
						Gửi
					</Text>
				</TouchableOpacity>
				<Text style={styles.orText}>
					hoặc
				</Text>
				<TouchableOpacity style={{marginTop: 20}}>
					<Icon icon={GoogleIcon}/>
				</TouchableOpacity>
				<Text style={styles.haveAccount}>
					Bạn không có tài khoản?
				</Text>
				<TouchableOpacity style={{...STYLES.greenButton, backgroundColor: "#ffffff"}} onPress={handleRegister}>
					<Text style={STYLES.greenButtonText}>
						Đăng ký
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
		color: "black",
		fontWeight: "bold"
	},
	backToLogin: {
		fontSize: 18,
	},
	orText: {
		marginTop: 30,
		marginBottom: 10,
		fontWeight: "bold",
		color: "black",
		fontSize: 18
	},
	haveAccount: {
		marginTop: 20,
	},
});
