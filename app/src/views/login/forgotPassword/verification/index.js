import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import color from '../../../../constants/color'
import { SCREEN } from '../../../../constants/screen';
import GoogleIcon from '../../../../components/icons/google-icon';
import Icon from '../../../../components/icons/icon-tag';
import CodeInput from 'react-native-confirmation-code-input';

export default function VerificationForgotPasswordScreen({ route, navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleVerification = () => {
        navigation.navigate("SetNewPasswordScreen");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Nhập mã xác minh
            </Text>
            <View style={{height: "10%"}}>
                <CodeInput
                    keyboardType="numeric"
                    codeLength={4}
                    className='border-circle'
                    compareWithCode='1234'
                    autoFocus={false}
                    codeInputStyle={{ borderWidth: 2, borderColor: "black", color: "black", width: 50, height: 50, fontSize: 20 }}
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
            <TouchableOpacity style={styles.verificationContainer} onPress={handleVerification}>
                <Text style={styles.verificationText}>
                    Xác minh
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
    didntGetCode: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 15,
    },
    didntGetCodeQuestion: {
        fontSize: 18,
    },
    didntGetCodeResend: {
        fontSize: 18,
        marginLeft: 5, 
        color: "red",
    }, 
    verificationContainer: {
        backgroundColor: "#50D890",
        flexDirection: 'row',
        justifyContent: 'center',
        width:"90%",
        marginHorizontal: 70,
        marginTop: 50,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 5,
    },
    verificationText: {
        fontSize: 30,
        color: '#000000',
    },

});
