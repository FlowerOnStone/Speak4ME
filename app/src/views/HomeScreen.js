import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen({ route, navigation }) {
    const { username } = route.params;

    const handleLogout = () => {
        navigation.goBack();
    };

    const handleEditor = () => {
        navigation.navigate('EditorScreen');
    };

    const handleHistory = () => {
        navigation.navigate('HistoryScreen', { sentences: ["abc", "bcd"] });
    };

    const handlePopularSentences = () => {
        navigation.navigate('PopularSentencesScreen');
    }

    return (
        <SafeAreaView>
            <View style = {styles.body}>
                <TouchableOpacity onPress={handleEditor}>
                    <View style={styles.button}>
                        <Text>
                            <Icon name="edit" color="#000000" type = "solid" size={20} />
                            <Text style = {styles.textBody}>
                                {'  Soạn thảo văn bản'}
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHistory}>
                    <View style = {styles.button}>
                        <Text>
                            <Icon name="history" color="#000000" type = "solid" size={20} />
                            <Text style = {styles.textBody}>
                                {'  Lịch sử soạn thảo văn bản'}
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePopularSentences}>
                    <View style = {styles.button}>
                        <Text>
                            <Icon name="comments" color="#000000" type = "solid" size={20} />
                            <Text style = {styles.textBody}>
                                {'  Các câu giao tiếp thông dụng'}
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.button}>
                        <Text>
                            <Icon name="comment-alt" color="#000000" type = "solid" size={20} />
                            <Text style = {styles.textBody}>
                                {'  Chuẩn bị trước văn bản'}
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
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
