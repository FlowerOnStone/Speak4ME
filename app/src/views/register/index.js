import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { SCREEN } from '../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../components/common/screen-header';
import THEME from '../../constants/theme';
import STYLES from '../../constants/styles';

export default function RegisterScreen({ navigation }) {
	const [firstandlastname, setFirstandlastname] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [repeatpassword, setRepeatpassword] = useState('');
	const [email, setEmail] = useState('');

	const handleRegister = () => {
		// Call API to register user
		navigation.navigate(SCREEN.START, { username });
	};

	const goBack = () => {
		// Call API to register user
		navigation.navigate(SCREEN.START);
	};
	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);

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
						onChangeText={text => setFirstandlastname(text)}
						placeholder="Họ và tên"
					/>
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
					<TextInput
						style={STYLES.loginRegisterInputBox}
						value={repeatpassword}
						onChangeText={text => setRepeatpassword(text)}
						placeholder="Nhập lại mật khẩu"
						secureTextEntry={true}
					/>
					<TextInput
						style={STYLES.loginRegisterInputBox}
						value={email}
						onChangeText={text => setEmail(text)}
						placeholder="Email"
					/>
					<TouchableOpacity onPress={handleRegister } style={STYLES.greenButton}>
						<Text style= {STYLES.greenButtonText}>
							{'Đăng ký'}
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
	);
};
