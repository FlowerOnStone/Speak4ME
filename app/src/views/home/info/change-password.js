import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import { SCREEN } from '../../../constants/screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import { ScrollView } from 'react-native';
import STYLES from '../../../constants/styles';
import CONSTANTS from '../../../constants/contants';
import PassMeter from "react-native-passmeter";
import { ICON_CONSTANTS } from '../../../constants/icon-constants';

export default function ChangePasswordScreen({ route, navigation }) {
    const [currentPassword, setCurrentPassword] = useState('');
	const [isValidationCurrentPassword, setIsValidationCurrentPassword] = useState(true);
	const [currentPasswordWarning, setCurrentPasswordWarning] = useState(''); 

    const [password, setPassword] = useState('');
	const [showPasswordRequirement, setShowPasswordRequirement] = useState(false);
	const [isValidationPassword, setIsValidationPassword] = useState(false);
	const [passwordWarning, setPasswordWarning] = useState(''); 

	const [repeatPassword, setRepeatPassword] = useState('');
	const [isValidationRepeatPassword, setIsValidationRepeatPassword] = useState(true);
	const [repeatPasswordWarning, setRepeatPasswordWarning] = useState(''); 

    const validationCurrentPassword = () => {
		if (currentPassword.length == 0) {
			setIsValidationCurrentPassword(false);
			setCurrentPasswordWarning("Bạn chưa nhập mật khẩu hiện tại");
			return false;
		}
		setIsValidationCurrentPassword(true);
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

    const handleSubmit = () => {
        validationCurrentPassword();
        validationPassword();
        validationRepeatPassword();
        if (!validationCurrentPassword() || !validationPassword() || !validationRepeatPassword()) {
            return;
        }
        navigation.navigate(SCREEN.INFO);
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
                title={'Đổi mật khẩu'}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.container}>
				<View style={styles.contentContainer}>
                    <Text style={STYLES.underlineInputTitle}>
                        Mật khẩu hiện tại
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={currentPassword}
                        onChangeText={text => setCurrentPassword(text)}
                        onTextInput={() => setIsValidationCurrentPassword(true)}
                        onEndEditing={validationCurrentPassword}
                        placeholder="Mật khẩu hiện tại"
                        secureTextEntry={true}
                    />
                    { !isValidationCurrentPassword && 
                        <Text style={STYLES.errorTextbox}>
                            {currentPasswordWarning}
                        </Text>
                    }
                    <Text style={STYLES.underlineInputTitle}>
                        Mật khẩu mới
                    </Text>
                    {
                        showPasswordRequirement && 
                        <Text style={{ ...STYLES.requirementTextbox, width:"100%" }}>
                            {CONSTANTS.PASSWORD_REQUIREMENT}
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
                    <TouchableOpacity style={STYLES.greenButton} onPress={handleSubmit}>
                        <Text style={STYLES.greenButtonText}>
                            Cập nhật
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        ...STYLES.contentContainer,
        padding: "5%"
    },
    container: {
        backgroundColor: '#fff',
        height: "93%",
        width:"100%"
    },
});
