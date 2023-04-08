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
        marginLeft: 110
        // justifyContent: 'space-between'
    },
    setting: {
        textAlign: 'right',
        marginRight: 0,
        fontSize: 30,
        marginRight:10,
        marginTop: 5
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
    // editButton: {
    //     marginTop:5
    // }
})

export default styles;