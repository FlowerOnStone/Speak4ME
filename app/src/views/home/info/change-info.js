import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import { SCREEN } from '../../../constants/screen';
import GoogleIcon from '../../../components/icons/google-icon';
import Icon from '../../../components/icons/icon-tag';
import CameraIcon from '../../../components/icons/camera-icon';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import SelectDropdown from 'react-native-select-dropdown'

export default function ChangeInfoScreen({ route, navigation }) {
    const [name, setName] = useState('Nguyễn Đức Thuận');

    const [email, setEmail] = useState('thuanbn03@gmail.com');
	const [emailWarning, setEmailWarning] = useState('');
	const [isValidationEmail, setIsValidationEmail] = useState(true);

    const [phoneNumber, setPhoneNumber] = useState('0123456789');
    const [phoneNumberWarning, setPhoneNumberWarning] = useState('');
	const [isValidationPhoneNumber, setIsValidationPhoneNumber] = useState(true);

    const genderList = ["Nam", "Nữ"];
    const [gender, setGender] = useState('Nam');

    const [date, setDate] = useState('01/01/2003');
    const [dateWarning, setDateWarning] = useState('');
	const [isValidationDate, setIsValidationDate] = useState(true);

    const handleSave = () => {
        validationEmail();
        validationPhoneNumber();
        validationDate();
        if (!validationDate() || !validationEmail() || !validationPhoneNumber()) {
            return;
        }
        navigation.navigate(SCREEN.INFO);
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
    
    const validationPhoneNumber = () => {
		if (phoneNumber.length == 0) {
			setIsValidationPhoneNumber(false);
			setPhoneNumberWarning("Bạn chưa nhập số điện thoại");
			return false;
		}
		if (phoneNumber.length != 10 || phoneNumber[0] != '0') {
			setIsValidationPhoneNumber(false);
			setPhoneNumberWarning("Số điện thoại phải bao gồm 10 chữ só, bắt đầu bằng số 0");
			return false;
		} 
		setIsValidationEmail(true);
		return true;
    }

    const changeDate = (text) => {
        text = text.replaceAll(".", '');
        text = text.replaceAll(",", '');
        text = text.replaceAll("/", '');
        if (text.length > 2) {
            text = text.substring(0, 2) + '/' + text.substring(2, text.length);
        }
        if (text.length > 5) {
            text = text.substring(0, 5) + '/' + text.substring(5, text.length);
        }
        setDate(text);
    }

    const checkDate = () => {
        var day = date.substring(0, 2);
        var month = date.substring(3, 5);
        var year = date.substring(6, 10);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        if (year + '-' + month + '-' + day > yyyy + '-' + mm + '-' + dd) {
            return false;
        }
        day = parseInt(day);
        month = parseInt(month);
        year = parseInt(year);
        if (year < 1900) {
            return false;
        }
        if (month <= 0 || month > 12) {
            return false;
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day <= 0 || day > 31) {
                return false;
            }
        }
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            if (day <= 0 || day > 30) {
                return false;
            }
        }
        if (year % 400 == 0) {
            if (day <= 0 || day > 29) {
                return false;
            }
        }
        if (year % 100 == 0) {
            if (day <= 0 || day > 28) {
                return false;
            }
        }
        if (year % 4 == 0) {
            if (day <= 0 || day > 29) {
                return false;
            }
        }
        if (day <= 0 || day > 28) {
            return false;
        }
        return true;
    }

    const validationDate = () => { 
        if (date.length == 0) {
			setIsValidationDate(false);
			setDateWarning("Bạn chưa nhập ngày sinh");
			return false;
		}
        if (date.length != 10 || !checkDate()) {
            setIsValidationDate(false);
			setDateWarning("Ngày sinh không hợp lệ");
			return false;
        }
    }


    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
        </TouchableOpacity>
    );

    const [saveButton] = useState(
        <TouchableOpacity onPress={() => handleSave()}>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
                Lưu
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={STYLES.container}>
            <ScreenHeader
                leftItem={backButton}
                title={'Hồ sơ'}
                rightItem={saveButton}
            />
            <ScrollView style={styles.container}>
                <View style={styles.avatarContainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.avatar}>
                        </View>
                        <TouchableOpacity style={styles.changeAvatar}>
                            <Icon icon={CameraIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>
                        Nguyễn Đức Thuận
                    </Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={STYLES.underlineInputTitle}>
                        Họ và tên
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Họ và tên"
                    />
                    <Text style={STYLES.underlineInputTitle}>
                        Email
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
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
                    <Text style={STYLES.underlineInputTitle}>
                        Số điện thoại
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={phoneNumber}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={text => setPhoneNumber(text.replace(".", '').replace(",", ''))}
                        onTextInput={() => setIsValidationPhoneNumber(true)}
                        onEndEditing={validationPhoneNumber}
                        placeholder="Số điện thoại"
                    />
                    {
                        !isValidationPhoneNumber &&
                        <Text style={STYLES.errorTextbox}>
                            {phoneNumberWarning}
                        </Text>
                    }
                    <Text style={STYLES.underlineInputTitle}>
                        Giới tính
                    </Text>
                    <SelectDropdown
                        buttonStyle={STYLES.underlineInputBox}
                        buttonTextStyle= {{textAlign: "left"}}
                        data={genderList}
                        onSelect={selectedItem => setGender(selectedItem)}
                        defaultValue={gender}
                    />
                    <Text style={STYLES.underlineInputTitle}>
                        Ngày sinh
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={date}
                        maxLength={10}
                        keyboardType="numeric"
                        onChangeText={text => changeDate(text)}
                        onTextInput={() => setIsValidationDate(true)}
                        onEndEditing={validationDate}
                        placeholder="Ngày sinh"
                    />
                    {
                        !isValidationDate &&
                        <Text style={STYLES.errorTextbox}>
                            {dateWarning}
                        </Text>
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        marginVertical: 15,
        color: "black"
    },
    container: {
        backgroundColor: '#fff',
        height: "93%",
        width: "100%"
    },
    infoContainer: {
        width: "100%",
        padding: "5%"
    },
    avatarContainer: {
        height: "25%",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "gray",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 105,
        height: 105,
    },
    avatar: {
        width: 105,
        height: 105,
        backgroundColor: "gray",
        borderRadius: 53
    },
    changeAvatar: {
        position: "absolute",
        left: 77,
        top: 77
    }
});
