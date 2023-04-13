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