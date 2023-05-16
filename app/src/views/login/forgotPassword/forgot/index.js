import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import color from '../../../../constants/color'
import { SCREEN } from '../../../../constants/screen';
import GoogleIcon from '../../../../components/icons/google-icon';
import Icon from '../../../../components/icons/icon-tag';

export default function ForgotPasswordScreen({ route, navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        navigation.navigate("VerificationForgotPasswordScreen");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Nhập địa chỉ email
            </Text>
            <TextInput
                style={styles.inputBox}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="email"
            />
            <TouchableOpacity>
                <Text style={styles.backToLogin}>
                    Quay lại đăng nhập
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Gửi
                </Text>
            </TouchableOpacity>
            <Text style={styles.orText}>
                hoặc
            </Text>
            <TouchableOpacity style={{marginTop: 20}}>
                <Icon icon={GoogleIcon}/>
            </TouchableOpacity>
            <Text style={styles.haveAccount}>
                Bạn không có tài khoản?
            </Text>
            <TouchableOpacity style={styles.registerContainer}>
                <Text style={styles.buttonText}>
                    Đăng ký
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 16,
        color: "black", 
        fontWeight: "bold"
    },
    backToLogin: {
        fontSize: 18,
    },
    orText: {
        marginTop: 30,
        marginBottom: 10,
        fontWeight: "bold",
        color: "black",
        fontSize: 18
    },
    haveAccount: {
        marginTop: 20,

    },
    inputBox: {
        width: "90%",
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#BEBEBE',
        elevation: 20,
        marginVertical: 15,
        fontSize: 20,
        paddingLeft: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    submitContainer: {
        width: "90%",
        backgroundColor: "#50D890",
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 60,
        marginHorizontal: 70,
        marginTop: 50,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 5,
    },
    registerContainer: {
        width: "90%",
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 5,
    },
    buttonText: {
        fontSize: 30,
        color: '#000000',
    },
});
