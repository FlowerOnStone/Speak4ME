import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

export class Task extends Component {
  render() {
    const handle = () => {
        alert('xinchaocacban')
    }
    return (
        <SafeAreaView>
            <View style = {styles.body}>
                <TouchableOpacity onPress={handle}>
                    <View style={styles.button}>
                        <Text>
                            <Icon name="edit" color="#000000" type = "solid" size={20} />
                            <Text style = {styles.textBody}>
                                {'  Soạn thảo văn bản'}
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style = {styles.button}>
                        <Text>
                            <Icon name="history" color="#000000" type = "solid" size={20} />
                            <Text style = {styles.textBody}>
                                {'  Lịch sử soạn thảo văn bản'}
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
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
    )
  }
}

export default Task;
