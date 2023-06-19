import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SCREEN } from '../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../components/common/screen-header';
import THEME from '../../constants/theme';
import STYLES from '../../constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ route, navigation }) {

	const [darkMode, setDarkMode] = useState(!darkMode);
	const [count, setCount] = useState(0);

	useEffect(() => {
	  AsyncStorage.getItem('darkMode').then(storedDarkMode => {
		if (storedDarkMode !== null) {
		  setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
		}
	  });
	  console.log("home screen " + darkMode + " " + count);
	}, [count]);

	const handleLogout = () => {
		navigation.goBack();
	};
	const handleEditor = () => {
		navigation.navigate(SCREEN.EDITOR);
	};

	const handleHistory = () => {
		navigation.navigate(SCREEN.HISTORY, { sentences: ["Xin chào", "Bạn có khỏe không", "Bạn đã ăn cơm chưa", "Bây giờ là mấy giờ", "Tôi khỏe", "Bạn tên là gì", "Bạn muốn mua gì",] });
	};
	const handleInfo = () => {
		setCount(count + 1);
		navigation.navigate("AccountInfoScreen");
	};

	const [infoButton] = useState(
		<TouchableOpacity onPress={handleInfo}>
			<Icon name="bars" color="#000000" type="solid" size={THEME.FONT_SIZE_EXTRA_LARGE} />
		</TouchableOpacity>
	);

	const handlePopularSentences = () => {
		navigation.navigate(SCREEN.POPULAR_SENTENCES);
	}

	const handleTopics = () => {
		// console.log(1);
		navigation.navigate(SCREEN.TOPIC);
	}

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
		</TouchableOpacity>
	);

	return (
		<View style = {STYLES.container}>
			<ScreenHeader
				title={'Trang chủ'}
				rightItem={infoButton}
			/>
			<View style = {[STYLES.contentContainer, {backgroundColor: darkMode === true ? "black" : "white"}]}>
				<TouchableOpacity onPress={handleEditor} style={styles.button}>
					<Icon name="edit" color="#000000" type = "solid" size={20} />
					<Text style = {styles.textBody}>
						{'  Soạn thảo văn bản'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleHistory} style={styles.button}>
					<Icon name="history" color="#000000" type = "solid" size={20} />
					<Text style = {styles.textBody}>
						{'  Lịch sử soạn thảo văn bản'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handlePopularSentences} style={styles.button}>
					<Icon name="comments" color="#000000" size={20} />
					<Text style = {styles.textBody}>
						{'  Các câu giao tiếp thông dụng'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleTopics} style={styles.button}>
					<Icon name="comment-alt" color="#000000" type = "solid" size={20} />
					<Text style = {styles.textBody}>
						{'  Chuẩn bị trước văn bản'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	textBody: {
		fontSize: 20,
		color: '#000000',
		width: "80%",
		textAlign: "center"
	},
	button: {
		...STYLES.greenButton,
		backgroundColor: "#EFFFFB",
		height: 95,
		marginVertical: 10
	},
});
