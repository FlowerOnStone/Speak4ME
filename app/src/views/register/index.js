import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { SCREEN } from '../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../components/common/screen-header';
import THEME from '../../constants/theme';
import STYLES from '../../constants/styles';
import PassMeter from "react-native-passmeter";
import CONSTANTS from '../../constants/contants';

export default function RegisterScreen({ navigation }) {
	const [firstandlastname, setFirstAndLastName] = useState('');

	const [username, setUsername] = useState('');
	const usernameRequirement = "Tên đăng nhập phải bao gồm ít nhất 6 kí tự, nhiều nhất 20 ký tự, chi được chứa kí tự thường, kí tự hoa và chữ số, không được chứa kí tự đặc biệt"; 
	const [usernameWarning, setUsernameWarning] = useState('');
	const [isValidationUsername, setIsValidationUsername] = useState(true);
	const [showUsernameRequirement, setShowUsernameRequirement] = useState(false);

	const [email, setEmail] = useState('');
	const [emailWarning, setEmailWarning] = useState('');
	const [isValidationEmail, setIsValidationEmail] = useState(true);

	const [password, setPassword] = useState('');
	const [showPasswordRequirement, setShowPasswordRequirement] = useState(false);
	const [isValidationPassword, setIsValidationPassword] = useState(false);
	const [passwordWarning, setPasswordWarning] = useState(''); 

	const [repeatPassword, setRepeatPassword] = useState('');
	const [isValidationRepeatPassword, setIsValidationRepeatPassword] = useState(true);
	const [repeatPasswordWarning, setRepeatPasswordWarning] = useState(''); 


	const handleRegister = () => {
		!validationUsername();
		!validationEmail();
		!validationPassword();
		!validationRepeatPassword();
		if (!validationUsername() || !validationEmail() || !validationPassword() || !validationRepeatPassword()) {
			return;
		}
		// Call API to register user
		navigation.navigate(SCREEN.START, { username });
	};


	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);

	const validationUsername = () => {
		setShowUsernameRequirement(false);
		if (username.length == 0) {
			setUsernameWarning("Bạn chưa nhập tên đăng nhập")
			setIsValidationUsername(false);
			return false;
		} 
		const regex = /^\w[\w.]{5,19}$/;
		console.log(username, regex.test(username));
		if (regex.test(username) == false) {
			setUsernameWarning("Tên đăng nhập không hợp lệ")
			setIsValidationUsername(false);
			return false;
		} 
		setIsValidationUsername(true);
		return true;
	}

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

	const validationPassword = () => {
		setShowPasswordRequirement(false);
		setPasswordWarning('');
		if (password.length == 0) {
			setIsValidationPassword(false);
			setPasswordWarning("Bạn chưa nhập mật khẩu");
			return false;
		}
		const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
		if (strongRegex.test(password) == 0) {
			setIsValidationPassword(false);
			return false;
		}
		setIsValidationPassword(true);
		return true;
	}

	const validationRepeatPassword = () => {
		if (repeatPassword.length == 0) {
			setIsValidationRepeatPassword(false);
			setRepeatPasswordWarning("Bạn chưa nhập lại mật khẩu");
			return false;
		}
		if (repeatPassword != password) {
			setIsValidationRepeatPassword(false);
			setRepeatPasswordWarning("Nhập lại mật khẩu không khớp");
			return false;
		}
		setIsValidationRepeatPassword(true);
		return true;
	}

	return (
		<View style={STYLES.container}>
			<ScreenHeader
				leftItem={backButton}
				title={'Đăng ký'}
			/>
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems:"center" }} style={{width: "100%"}}>
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={firstandlastname}
					onChangeText={text => setFirstAndLastName(text)}
					placeholder="Họ và tên"
				/>
				{
					showUsernameRequirement && 
					<Text style={STYLES.requirementTextbox}>
						{usernameRequirement}
					</Text>
				}
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={username}
					onChangeText={text => setUsername(text)}
					onTextInput={() => { setShowUsernameRequirement(true); setIsValidationUsername(true) }}
					onEndEditing={validationUsername}
					placeholder="Tên đăng nhập"
				/>
				{
					!isValidationUsername &&
					<Text style={STYLES.errorTextbox}>
						{usernameWarning}
					</Text>
				}
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={email}
					onChangeText={text => setEmail(text)}
					onTextInput={() => setIsValidationEmail(true)}
					onEndEditing={validationEmail}
					placeholder="Email"
				/>
				{
					!isValidationEmail &&
					<Text style={STYLES.errorTextbox}>
						{emailWarning}
					</Text>
				}
				{
					showPasswordRequirement && 
					<Text style={STYLES.requirementTextbox}>
						{CONSTANTS.PASSWORD_REQUIREMENT}
					</Text>
				}
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={password}
					onChangeText={text => setPassword(text)}
					onTextInput={() => setShowPasswordRequirement(true)}
					onEndEditing={validationPassword}
					placeholder="Mật khẩu"
					secureTextEntry={true}
					maxLength={CONSTANTS.MAX_LEN}
				/>
				{ password.length == 0 && !isValidationPassword && passwordWarning.length != 0 && 
					<Text style={STYLES.errorTextbox}>
						{passwordWarning}
					</Text>
				}
				{ password.length > 0 && 
					<PassMeter
						showLabels
						password={password}
						maxLength={CONSTANTS.MAX_LEN}
						minLength={CONSTANTS.MIN_LEN}
						labels={CONSTANTS.PASS_LABELS}
					/>
				}
				<TextInput
					style={STYLES.loginRegisterInputBox}
					value={repeatPassword}
					onChangeText={text => setRepeatPassword(text)} 
					onTextInput={() => setIsValidationRepeatPassword(true)}
					onEndEditing={validationRepeatPassword}
					placeholder="Nhập lại mật khẩu"
					secureTextEntry={true}
				/> 
				{ !isValidationRepeatPassword && 
					<Text style={STYLES.errorTextbox}>
						{repeatPasswordWarning}
					</Text>
				}
				<TouchableOpacity onPress={handleRegister} style={STYLES.greenButton}>
					<Text style= {STYLES.greenButtonText}>
						{'Đăng ký'}
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};