import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from '../../../components/icons/icon-tag';
import EditInfoIcon from '../../../components/icons/edit-info-icon';
import COLOR from '../../../constants/color';
import PhoneIcon from '../../../components/icons/phone-icon';
import EmailIcon from '../../../components/icons/email-icon';
import DarkModeIcon from '../../../components/icons/dark-mode-icon';
import speakIcon from '../../../components/icons/speak-icon';
import ChangePasswordIcon from '../../../components/icons/change-password-icon';
import LogoutIcon from '../../../components/icons/logout-icon';
import RNVIcon from 'react-native-vector-icons/FontAwesome5';
import ScreenHeader from '../../../components/common/screen-header';
import THEME from '../../../constants/theme';
import STYLES from '../../../constants/styles';
import { SCREEN } from '../../../constants/screen';


export default function AccountInfoScreen({ route, navigation }) {

    const handleChangePassword = () => {
        navigation.navigate(SCREEN.CHANGE_PASSWORD);
    };
    const handleChangeInfo = () => {
        navigation.navigate(SCREEN.CHANGE_INFO);
    };
    const handleLogout = () => {
        navigation.navigate(SCREEN.START);
    };
    const [backButton] = useState(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <RNVIcon name="angle-left" size={THEME.FONT_SIZE_EXTRA_LARGE} color="black" />
        </TouchableOpacity>
    );
    return (
        <View style={STYLES.container}>
            <ScreenHeader
                leftItem={backButton}
                title={'Thông tin chung'}
            />
            <View style={STYLES.contentContainer}>
                <View style= {styles.infoContainer}>
                    <View style={styles.info}>
                        <View style={styles.avatar} />
                        <Text style={styles.name}>
                            Nguyễn Đức Thuận
                        </Text>
                        <View  style={styles.editAccount}>
                            <TouchableOpacity  onPress={handleChangeInfo}>
                                <Icon icon={EditInfoIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contactInfo}>
                        <Icon icon={PhoneIcon} containerStyle={styles.contactInfoIconContainer} />
                        <Text style={styles.contactInfoText}>
                            0123456789
                        </Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Icon icon={EmailIcon} containerStyle={styles.contactInfoIconContainer} />
                        <Text style={styles.contactInfoText}>
                            thuanbn03@gmail.com
                        </Text>
                    </View>
                </View>
                <View style={styles.settingContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Icon icon={DarkModeIcon} containerStyle={styles.settingIconContainer} iconStyle={styles.settingIcon} />
                            <Text style={styles.settingText}>
                                Chế độ tối
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Icon icon={speakIcon} containerStyle={styles.settingIconContainer} iconStyle={styles.settingIcon} />
                            <Text style={styles.settingText}>
                                Âm lượng
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                            <Icon icon={ChangePasswordIcon} containerStyle={styles.settingIconContainer} iconStyle={styles.settingIcon} />
                            <Text style={styles.settingText}>
                                Đổi mật khẩu
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.logoutContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleLogout}>
                            <Icon icon={LogoutIcon} containerStyle={styles.settingIconContainer}/>
                            <Text style={styles.logoutText}>
                                Đăng xuất
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUND,
        height: '93%',
    },
    infoContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: '30%',
        width: '100%',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 75,
        height: 75,
        backgroundColor: 'gray',
        margin: 15,
        borderRadius: 37,
    },
    name: {
        flex: 5,
        textAlignVertical: 'center',
        fontSize: 24,
    },
    editAccount: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    contactInfo: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    contactInfoIconContainer: {
        marginHorizontal: 15,
        marginVertical: 5,
    },
    contactInfoText: {
        fontSize: 16,
        textAlignVertical: 'center',
        color: 'black',
    },
    settingContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: '58%',
        width: '100%',
    },
    buttonContainer: {
        paddingVertical: 15,
    },
    button: {
        flexDirection: 'row',
        height: 35,
        alignItems: 'center',
    },
    settingIconContainer: {
        padding: 15,
        width: 65,
    },
    settingIcon: {
        color: 'black',
    },
    settingText: {
        color: 'black',
        fontSize: 18,
    },
    logoutContainer: {
        padding: 15,
        height: '12%',
        width: '100%',
    },
    logoutText: {
        color: 'red',
        fontSize: 18,
    },
});
