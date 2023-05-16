import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EditInfoIcon from '../../../components/icons/edit-info-icon';

export default function AccountInfoScreen({ route, navigation }) {

    return (
        <SafeAreaView>
            <View>
                <View>

                </View>
                <Text>
                Nguyễn Văn A
                </Text>
                <Icon icon={EditInfoIcon} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    body: {
      marginTop: 100,
    },
    textBody: {
        fontSize: 20,
        color: '#000000',
        // marginLeft: 30,
        // justifyCentent: 'center',
    },
    button: {
        // flex:1,
        backgroundColor: "#EFFFFB",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        paddingVertical: 30,
        paddingLeft: 10,
        borderRadius: 20,
        elevation: 5,
    },
});
