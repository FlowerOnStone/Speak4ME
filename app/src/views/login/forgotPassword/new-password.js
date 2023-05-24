import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

import color from '../../../constants/color'
import { SCREEN } from '../../../constants/screen';
import GoogleIcon from '../../../components/icons/google-icon';
import Icon from '../../../components/icons/icon-tag';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';

export default function SetNewPasswordScreen({ route, navigation }) {
	const [password, setPassword] = useState('');
	const [repeatpassword, setRepeatpassword] = useState('');

	const handleSubmit = () => {
		navigation.navigate(SCREEN.START);
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
				title={'Đặt lại mật khẩu'}
			/>
			<View style={STYLES.contentContainer}>
				<View style={{width: "90%"}}>
					<Text style={STYLES.underlineInputTitle}>
						Mật khẩu mới
					</Text>
					<TextInput
						style={STYLES.underlineInputBox}
						value={password}
						onChangeText={text => setPassword(text)}
						placeholder="Mật khẩu mới"
						secureTextEntry={true}
					/>
					<Text style={STYLES.underlineInputTitle}>
						Nhập lại mật khẩu
					</Text>
					<TextInput
						style={STYLES.underlineInputBox}
						value={repeatpassword}
						onChangeText={text => setRepeatpassword(text)}
						placeholder="Nhập lại mật khẩu"
					/>
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

