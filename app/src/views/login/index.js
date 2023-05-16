import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import color from '../../constants/color'
import { SCREEN } from '../../constants/screen';

export default function LoginScreen({ route, navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Call API to authenticate user
        navigation.navigate(SCREEN.HOME, { username });
    }

    const handleForgotPassword = () => {
        navigation.navigate("ForgotPasswordScreen");
    }

    return (
        <View style={styles.inputContainer}>
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
            <View style= {styles.forgotPassword}>
                <Text style= {styles.forgotQuestion}>
                    *Quên mật khẩu?
                </Text>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style= {styles.redForgotPassword}>
                        Nhấn vào đây
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogin } style={styles.loginContainer}>
                <Text style= {styles.loginText}>
                    {'Đăng nhập'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    inputBox: {
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#BEBEBE',
        elevation: 20,
        marginVertical: 15,
        // flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        paddingLeft: 15
    },
    inputContainer: {
        marginTop: 150,
        marginHorizontal: 20,
        marginVertical: 20,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#fff'
    },
    loginContainer: {
      backgroundColor: "#50D890",
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 70,
      marginTop: 50,
      paddingVertical: 20,
      borderRadius: 20,
      elevation: 5,
    },
    loginText: {
        fontSize: 30,
        color: '#000000',
    },
    forgotPassword: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginLeft: 15,
    },
    forgotQuestion: {
        fontSize: 18,
    },
    redForgotPassword: {
        fontSize: 18,
        marginLeft: 5, 
        color: "red",
    }
});
