import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';

import color from '../../../constants/color';
import { SCREEN } from '../../../constants/screen';
import GoogleIcon from '../../../components/icons/google-icon';
import Icon from '../../../components/icons/icon-tag';
import CodeInput from 'react-native-confirmation-code-input';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';

export default function VerificationForgotPasswordScreen({ route, navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleVerification = () => {
		navigation.navigate(SCREEN.SET_NEW_PASSWORD);
	};
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color="black" />
		</TouchableOpacity>
	);

	return (
		<View style={STYLES.container}>
			<ScreenHeader
				leftItem={backButton}
				title={'Xác minh'}
			/>
			<View style={STYLES.contentContainer}>
				<Text style={styles.title}>
					Nhập mã xác minh
				</Text>
				<View style={{height: '10%'}}>
					<CodeInput
						keyboardType="numeric"
						codeLength={4}
						className="border-circle"
						compareWithCode="1234"
						autoFocus={false}
						codeInputStyle={{ borderWidth: 2, borderColor: 'black', color: 'black', width: 50, height: 50, fontSize: 20 }}
						containerStyle={{ marginTop: 0}}
						onFulfill={(isValid, code) => { }}
					/>
				</View>
				<View style={styles.didntGetCode}>
					<Text style={styles.didntGetCodeQuestion}>Chưa nhận được mã?</Text>
					<TouchableOpacity>
						<Text style={styles.didntGetCodeResend}>
							Gửi lại
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={STYLES.greenButton} onPress={handleVerification}>
					<Text style={STYLES.greenButtonText}>
						Xác minh
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
		color: 'black',
	},
	didntGetCode: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 15,
	},
	didntGetCodeQuestion: {
		fontSize: 18,
	},
	didntGetCodeResend: {
		fontSize: 18,
		marginLeft: 5,
		color: 'red',
	},
});
