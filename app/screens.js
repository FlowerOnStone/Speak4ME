import { StyleSheet, TouchableOpacity } from "react-native";
import StartScreen from "./src/views/StartScreen";
import LoginScreen from './src/views/LoginScreen';
import RegisterScreen from './src/views/RegisterScreen';
import HomeScreen from './src/views/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from './src/components/icons/icon-tag';
// import moreOptionIcon from './src/components/icons/more-options-icon';

const screens = [
    {
        name: "Start",
        component: StartScreen,
        options: {
            headerShown: false
        },
    },
    {
        name: "Login",
        component: LoginScreen,
        options: {
            title: "Đăng nhập",
        },
    },
    {
        name: "Register",
        component: RegisterScreen,
        options: {
            title: "Đăng ký",
        },
    },
    {
        name: "Home",
        component: HomeScreen,
        options: {
            title: "Trang chủ",
            headerLeft: ()=> null,
            headerRight: () => (
                <TouchableOpacity style={styles.iconBox}>
                    <Icon name="bars" color="#000000" type = "solid" style = {styles.setting}/>
                </TouchableOpacity>
            ),
        },
    },
];

const styles = StyleSheet.create({
  iconBox: {
    marginRight: 5,
  },
  setting: {
    textAlign: 'right',
    marginRight: 0,
    fontSize: 25,
    marginRight:10,
    marginTop: 5
},
});

export default screens;