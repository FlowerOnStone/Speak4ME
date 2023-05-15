import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { SCREEN } from '../../constants/screen';

export default function StartScreen({ route, navigation }) {
//   const { username } = route.params;

  const handleLogin = () => {
    // Call API to authenticate user
    navigation.navigate(SCREEN.LOGIN);
  };

  const handleRegister = () => {
    // Call API to register user
    navigation.navigate(SCREEN.REGISTER);
    };

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
        backgroundColor: '#50D890',
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
