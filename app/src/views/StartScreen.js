import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import RegisterButton from '../components/registerButton/index'
import LoginButton from '../components/loginButton/index'

export default function StartScreen({ route, navigation }) {
//   const { username } = route.params;

  const handleLogin = () => {
    // Call API to authenticate user
    navigation.navigate('Login');
  }

  const handleRegister = () => {
    // Call API to register user
    navigation.navigate('Register');
    }

  return (
    <SafeAreaView>
        <View>
            <Text style={styles.textHeader}>
              Speak4ME
            </Text>
        </View>
        <View style= {styles.body}>
            <TouchableOpacity onPress={handleLogin}>
                <View style= {styles.button}>
                    <Text style= {styles.textButton}>
                        {'Đăng nhập'}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister}>
                <View style= {styles.button}>
                    <Text style= {styles.textButton}>
                        {'Đăng ký'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    textHeader: {
        color: '#000000',
        // fontWeight: 'bold',
        marginTop: 100,
        fontSize: 70,
        textAlign: 'center',
    },
    body: {
        marginTop: 130,
    },
    textButton: {
        fontSize: 28,
        color: '#000000',
    },
    button: {
        // flex:1,
        backgroundColor: "#50D890",
        flexDirection: 'row',
        // textAlign: 'center',
        justifyContent: 'center',
        // marginTop: 60,
        marginHorizontal: 30,
        marginVertical: 20,
        paddingVertical: 25,
        // paddingLeft: 10,
        borderRadius: 20,
        elevation: 5,
    },
});