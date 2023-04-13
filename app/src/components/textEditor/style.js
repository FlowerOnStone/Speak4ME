import { StyleSheet } from "react-native";
import color from "../../constants/color";

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
})

export default styles;