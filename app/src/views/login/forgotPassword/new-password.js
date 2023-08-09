import React, { useState } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

import { SCREEN } from '../../../constants/screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import STYLES from '../../../constants/styles';
import PassMeter from "react-native-passmeter";
import CONSTANTS from '../../../constants/contants';
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

export default function SetNewPasswordScreen({ route, navigation }) {
	const [password, setPassword] = useState('');
	const passwordRequirement = "Tên đăng nhập phải bao gồm ít nhất 6 kí tự, nhiều nhất 20 ký tự, phải có ít nhất một kí tự thường, một kí tự hoa và chữ số, không được chứa kí tự đặc biệt"; 
	const [showPasswordRequirement, setShowPasswordRequirement] = useState(false);
	const [isValidationPassword, setIsValidationPassword] = useState(false);
	const [passwordWarning, setPasswordWarning] = useState(''); 
	const [repeatPassword, setRepeatPassword] = useState('');
	const [isValidationRepeatPassword, setIsValidationRepeatPassword] = useState(false);
	const [repeatPasswordWarning, setRepeatPasswordWarning] = useState(''); 

	const handleSubmit = () => {
		validationPassword();
		validationRepeatPassword();
		if (!validationPassword() || !validationRepeatPassword()) {
			return;
		}
		navigation.navigate(SCREEN.START);
	}
	const [backButton] = useState(		
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" color={ICON_CONSTANTS.BLACK_COLOR} size={ICON_CONSTANTS.MEDIUM_SIZE} solid/>
		</TouchableOpacity>
	);
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
				title={'Đặt lại mật khẩu'}
			/>
			<View style={STYLES.contentContainer}>
				<View style={{width: "90%"}}>
					<Text style={STYLES.underlineInputTitle}>
						Mật khẩu mới
					</Text>
					{
						showPasswordRequirement && 
						<Text style={STYLES.requirementTextbox}>
							{passwordRequirement}
						</Text>
					}
					<TextInput
						style={STYLES.underlineInputBox}
						value={password}
						onChangeText={text => setPassword(text)}
						onTextInput={() => setShowPasswordRequirement(true)}
						onEndEditing={validationPassword}
						placeholder="Mật khẩu mới"
						secureTextEntry={true}
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
					<Text style={STYLES.underlineInputTitle}>
						Nhập lại mật khẩu
					</Text>
					<TextInput
						style={STYLES.underlineInputBox}
						value={repeatPassword}
						onChangeText={text => setRepeatPassword(text)}
						onEndEditing={validationRepeatPassword}
						placeholder="Nhập lại mật khẩu"
						secureTextEntry={true}
					/>
					{
						!isValidationRepeatPassword && 
						<Text style={STYLES.errorTextbox}>
							{repeatPasswordWarning}
						</Text>
					}
				</View>
				<TouchableOpacity style={STYLES.greenButton} onPress={handleSubmit}>
					<Text style={STYLES.greenButtonText}>
						Gửi
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

