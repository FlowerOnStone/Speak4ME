import { React, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SCREEN } from '../../constants/screen';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../components/common/screen-header';
import THEME from '../../constants/theme';
import STYLES from '../../constants/styles';
import { addText, deleteText } from './Data/history-data';
import { useNavigation } from '@react-navigation/native';
import { ICON_CONSTANTS } from '../../constants/icon-constants';

export default function HomeScreen({ route}) {
	const { username } = route.params;
	const navigation = useNavigation();
	// const [sentences, setSentences] = useState([]);

	const handleLogout = () => {
		navigation.goBack();
	};
	const handleEditor = () => {
		navigation.navigate(SCREEN.EDITOR);
	};

	const handleHistory = () => {
		navigation.navigate(SCREEN.HISTORY);
	};
	const handleInfo = () => {
		navigation.navigate(SCREEN.INFO_NAVIGATOR, {
            screen: SCREEN.INFO,
        });
	};

	const [infoButton] = useState(
		<TouchableOpacity onPress={handleInfo}>
			<Icon name="bars" color="#000000" type="solid" size={THEME.FONT_SIZE_EXTRA_LARGE} />
		</TouchableOpacity>
	);

	const handlePopularSentences = () => {
		navigation.navigate(SCREEN.POPULAR_SENTENCES_NAVIGATOR, {
			screen: SCREEN.POPULAR_SENTENCES,
		});
	};

	const handleTopics = () => {
		// console.log(1);
		navigation.navigate(SCREEN.TOPIC_NAVIGATOR, {
			screen: SCREEN.TOPIC,
		});
	};

	const [backButton] = useState(
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color="black" />
		</TouchableOpacity>
	);

	return (
		<View style = {STYLES.container}>
			<ScreenHeader
				title={'Trang chủ'}
				rightItem={infoButton}
			/>
			<View style = {STYLES.contentContainer}>
				<TouchableOpacity onPress={handleEditor} style={styles.button}>
					<Icon name="edit" color={ICON_CONSTANTS.BLACK_COLOR} size={20} solid/>
					<Text style = {styles.textBody}>
						{'  Soạn thảo văn bản'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleHistory} style={styles.button}>
					<Icon name="history" color={ICON_CONSTANTS.BLACK_COLOR} size={20} solid/>
					<Text style = {styles.textBody}>
						{'  Lịch sử soạn thảo văn bản'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handlePopularSentences} style={styles.button}>
					<Icon name="comments" color={ICON_CONSTANTS.BLACK_COLOR} size={20} solid/>
					<Text style = {styles.textBody}>
						{'  Các câu giao tiếp thông dụng'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleTopics} style={styles.button}>
					<Icon name="comment-alt" color={ICON_CONSTANTS.BLACK_COLOR} size={20} solid/>
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
		width: '80%',
		textAlign: 'center',
	},
	button: {
		...STYLES.greenButton,
		backgroundColor: '#EFFFFB',
		height: 95,
		marginVertical: 10,
	},
});
