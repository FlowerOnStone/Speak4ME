import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import color from '../../../../constants/color'
import { SCREEN } from '../../../../constants/screen';
import GoogleIcon from '../../../../components/icons/google-icon';
import Icon from '../../../../components/icons/icon-tag';

export default function SetNewPasswordScreen({ route, navigation }) {
    const [password, setPassword] = useState('');
    const [repeatpassword, setRepeatpassword] = useState('');

    const handleSubmit = () => {
        navigation.navigate("Start");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Mật khẩu mới
            </Text>
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Mật khẩu mới"
                secureTextEntry={true}
            />
            <Text style={styles.titleText}>
                Nhập lại mật khẩu
            </Text>
            <TextInput
                style={styles.inputBox}
                value={repeatpassword}
                onChangeText={text => setRepeatpassword(text)}
                placeholder="Nhập lại mật khẩu"
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>
                    Gửi
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        width: "90%",
        fontSize: 20,
        marginBottom: 16, 
    },
    inputBox: {
        width: "90%",
        height: 55,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: '#BEBEBE',
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
    submitButton: {
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
    submitText: {
        fontSize: 30,
        color: '#000000',
    },
});
