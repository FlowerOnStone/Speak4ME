import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import color from '../../../../constants/color'
import { SCREEN } from '../../../../constants/screen';

export default function ForgotPasswordScreen({ route, navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.inputContainer}>
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
            <TouchableOpacity style={styles.submitContainer}>
                <Text style={styles.buttonText}>
                    Gửi
                </Text>
            </TouchableOpacity>
            <Text>
                hoặc
            </Text>
            <Text>
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
    inputBox: {
        width: "90%",
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#BEBEBE',
        elevation: 20,
        marginVertical: 15,
        // flex: 1,
        fontSize: 20,
        paddingLeft: 15,
   },
    inputContainer: {
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
