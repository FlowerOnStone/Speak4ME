import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import color from '../../constants/color';
import { SCREEN } from '../../constants/screen';
import ScreenHeader from '../../components/common/screen-header';

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

    return (
        <>
        <ScreenHeader title="Đăng ký"/>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputBox}
                value={firstandlastname}
                onChangeText={text => setFirstandlastname(text)}
                placeholder="Họ và tên"
            />
            <TextInput
                style={styles.inputBox}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Tên đăng nhập"
            />
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Mật khẩu"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.inputBox}
                value={repeatpassword}
                onChangeText={text => setRepeatpassword(text)}
                placeholder="Nhập lại mật khẩu"
                secureTextEntry={true}

            />
            <TextInput
                style={styles.inputBox}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
            />
            <TouchableOpacity onPress={handleRegister } style={styles.registerContainer}>
                <Text style= {styles.registerText}>
                    {'Đăng ký'}
                </Text>
            </TouchableOpacity>
        </View>
        </>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: 'center',
        // padding: 10
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    inputContainer: {
        marginTop: 80,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    inputBox: {
        height: 58,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#BEBEBE',
        elevation: 20,
        marginVertical: 10,
        // flex: 1,
        flexDirection: 'row',
        fontSize: 18,
        paddingLeft: 15,
    },
    registerContainer: {
        backgroundColor: '#50D890',
        flexDirection: 'row',
        // textAlign: 'center',
        justifyContent: 'center',
        // marginTop: 60,
        marginHorizontal: 70,
        marginVertical: 50,
        paddingVertical: 15,
        // paddingLeft: 10,
        borderRadius: 20,
        elevation: 5,
    },
    registerText: {
        fontSize: 30,
        color: '#000000',
    },
});
