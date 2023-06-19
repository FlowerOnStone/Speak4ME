import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import color from '../../../constants/color'
import { SCREEN } from '../../../constants/screen';
import GoogleIcon from '../../../components/icons/google-icon';
import Icon from '../../../components/icons/icon-tag';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import { ScrollView } from 'react-native';
import STYLES from '../../../constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ChangePasswordScreen({ route, navigation }) {
    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('darkMode').then(storedDarkMode => {
        if (storedDarkMode !== null) {
            setDarkMode(JSON.parse(storedDarkMode)); // Chuyển đổi giá trị string sang boolean
        }
        });
        console.log("history screen" + darkMode);
    }, []);
    const [password, setPassword] = useState('');
    const [repeatpassword, setRepeatpassword] = useState('');

    const handleSubmit = () => {
        navigation.navigate("AccountInfoScreen");
    }; 
    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color='black' />
        </TouchableOpacity>
    );
    return (
        <View style={[STYLES.container, {backgroundColor: darkMode === true ? 'black' : 'white'}]}> 
            <ScreenHeader
                leftItem={backButton}
                title={'Đổi mật khẩu'}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={[styles.container, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
				<View style={[styles.contentContainer, {backgroundColor: darkMode === true ? 'black' : 'white'}]}>
                    <Text style={[STYLES.underlineInputTitle, {color: darkMode === true ? 'white' : 'black'}]}>
                        Mật khẩu hiện tại
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder="Mật khẩu hiện tại"
                        secureTextEntry={true}
                    />
                    <Text style={[STYLES.underlineInputTitle, {color: darkMode === true ? 'white' : 'black'}]}>
                        Mật khẩu mới
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder="Mật khẩu mới"
                        secureTextEntry={true}
                    />
                    <Text style={[STYLES.underlineInputTitle, {color: darkMode === true ? 'white' : 'black'}]}>
                        Nhập lại mật khẩu
                    </Text>
                    <TextInput
                        style={STYLES.underlineInputBox}
                        value={repeatpassword}
                        onChangeText={text => setRepeatpassword(text)}
                        placeholder="Nhập lại mật khẩu"
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={STYLES.greenButton} onPress={handleSubmit}>
                        <Text style={STYLES.greenButtonText}>
                            Cập nhật
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        ...STYLES.contentContainer,
        padding: "5%"
    },
    container: {
        backgroundColor: '#fff',
        height: "93%",
        width:"100%"
    },
});
