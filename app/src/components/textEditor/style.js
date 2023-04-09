import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: color.background,
    //     width: '100%',
    //     height: 100,
    //     paddingHorizontal: '10%',
    //     paddingVertical: '3%',
    // },
    // text: {
    //     color: color.text,
    //     fontSize: 15,
    // },
    // textBox: {
    //     width: '100%',
    //     height: '75%',
    //     backgroundColor: color.frame,
    //     borderTopLeftRadius: 10,
    //     borderTopRightRadius: 10,
    //     borderBottomLeftRadius: 10,
    //     paddingHorizontal: '3%',
    //     paddingVertical: '2%',
    //     borderTopWidth: 1,
    //     borderLeftWidth: 1,
    //     borderRightWidth: 1,
    //     borderColor: color.text,
    // },
    // addBox: {
    //     width: '100%',
    //     height: '25%',
    //     backgroundColor: color.frame,
    //     flexDirection: 'row',
    // },
    // itemBox: {
    //     flex: 4,
    //     backgroundColor: color.frame,
    //     borderBottomWidth: 1,
    //     borderRightWidth: 1,
    //     borderLeftWidth: 1,
    //     borderBottomRightRadius: 10,
    //     borderBottomLeftRadius: 10,
    //     flexDirection: 'row',
    //     paddingHorizontal: '2%',
    // },
    // blankBox: {
    //     flex: 6,
    //     backgroundColor: color.background,
    //     borderTopWidth: 1,
    //     borderColor: color.text,
    //     borderTopLeftRadius: 10,
    //   //  borderTopRightRadius: 10,
    // },
    // iconBox: {
    //     flex: 1,
    //     backgroundColor: color.background,
    // },
    // titleContainer: {
    //     flex: 1,
    //     backgroundColor: color.title,
    //     flexDirection: 'row',
    // },
    // backButtonContainer: {
    //     flex: 1,
    //     backgroundColor: color.lightText,
    // },
    // titleTextContainer: {
    //     flex: 4,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // settingButtonContainer: {
    //     flex: 1,
    //     backgroundColor: color.lightText,
    //   },
    // titleText: {
    //     color: color.text,
    //     fontSize: 32,
    //     fontWeight: 'bold',
    // },
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
        // marginLeft: 110
        // justifyContent: 'space-between'
    },
    setting: {
        textAlign: 'right',
        // marginRight: 0,
        fontSize: 30,
        marginRight:10,
        marginTop: 5
    },
    back: {
        textAlign: 'left',
        // marginRight: 0,
        fontSize: 40,
        marginLeft:10,
        // marginTop: 5
    },
    body: {
        // bottom:30,
        paddingHorizontal: 20,
        // width: '100%'
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
    search: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#D3D1D1',
        elevation: 5,
        flex: 1
    },
    searchContainer: {
        marginTop: 30,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconSearch: {

    },
    textSearch: {
        fontSize: 20,
        color: '#BEBEBE'
    }
})

export default styles;