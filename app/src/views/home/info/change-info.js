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

export default function ChangeInfoScreen({ route, navigation }) {
    const [name, setName] = useState('Nguyễn Đức Thuận');
    const [email, setEmail] = useState('thuanbn03@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('0123456789');
    const [gender, setGender] = useState('Nam');
    const [date, setDate] = useState('01/01/2003');

    const handleSubmit = () => {
        navigation.navigate("AccountInfoScreen");
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
                title={'Hồ sơ'}
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
                        placeholder="Email"
                    />
                    <Text style={STYLES.underlineInputTitle}>
                        Số điện thoại
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        placeholder="Số điện thoại"
                    />
                    <Text style={STYLES.underlineInputTitle}>
                        Giới tính
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={gender}
                        onChangeText={text => setGender(text)}
                        placeholder="Giới tính"
                    />

                    <Text style={STYLES.underlineInputTitle}>
                        Ngày sinh 
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={date}
                        onChangeText={text => setDate(text)}
                        placeholder="Ngày sinh"
                    />
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
