import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    inputContainerStyle: {
        'height': Dimensions.get('window').width * 0.12,
        'width': '90%',
        'boxSizing': 'border-box',
        'backgroundColor': '#FFFFFF',
        'borderWidth': 3,
        'borderBottomWidth': 3,
        'borderColor': '#BEBEBE',
        'borderStyle': 'solid',
        'borderTopLeftRadius': 25,
        'borderTopRightRadius': 25,
        'borderBottomRightRadius': 25,
        'borderBottomLeftRadius': 25,
    },
    leftIconContainerStyle: {

    },
    inputStyle: {
        marginLeft: 6,
    },
    rightIconContainerStyle: {

    },
});