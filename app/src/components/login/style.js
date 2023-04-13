import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#50D890',
        flexDirection: 'row',
        // marginTop: 40,
        // marginLeft: 40,
        // marginRight: 40,
        // marginBottom: 40,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-between'
        //alignItems: 'center',
        // borderWidth: 1,
        // borderRadius: 10,
    },
    textHeader: {
        color: '#000000',
        // fontWeight: 'bold',
        marginTop: -5,
        fontSize: 35,
        marginRight: 100
        // textAlign: 'center'
        // justifyContent: 'space-between'
    },
    back: {
        textAlign: 'left',
        // marginRight: 0,
        fontSize: 40,
        marginLeft:10,
        // marginTop: 5
    },
    inputBox: {
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#BEBEBE',
        elevation: 20,
        marginVertical: 15,
        // flex: 1,
        flexDirection: 'row',
    },
    inputContainer: {
        marginTop: 130,
        marginHorizontal: 20,
        marginVertical: 20,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputText: {
        color: '#BEBEBE',
        fontSize: 23
    },
    registerContainer: {
        backgroundColor: "#50D890",
        flexDirection: 'row',
        // textAlign: 'center',
        justifyContent: 'center',
        // marginTop: 60,
        marginHorizontal: 70,
        marginTop: 50,
        paddingVertical: 20,
        // paddingLeft: 10,
        borderRadius: 20,
        elevation: 5,
    },
    registerText: {
        fontSize: 30,
        color: '#000000',
    },
    forgotPassword: {
        marginTop: -10,
        fontSize: 18,
        marginLeft: 25
    }
    // editButton: {
    //     marginTop:5
    // }
})

export default styles;