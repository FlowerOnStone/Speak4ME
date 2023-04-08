import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        width: '100%',
        height: 100,
        paddingHorizontal: '10%',
        paddingVertical: '3%',
    },
    text: {
        color: color.text,
        fontSize: 15,
    },
    textBox: {
        width: '100%',
        height: '75%',
        backgroundColor: color.frame,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: color.text,
    },
    addBox: {
        width: '100%',
        height: '25%',
        backgroundColor: color.frame,
        flexDirection: 'row',
    },
    itemBox: {
        flex: 4,
        backgroundColor: color.frame,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: '2%',
    },
    blankBox: {
        flex: 6,
        backgroundColor: color.background,
        borderTopWidth: 1,
        borderColor: color.text,
        borderTopLeftRadius: 10,
      //  borderTopRightRadius: 10,
    },
    iconBox: {
        flex: 1,
        backgroundColor: color.background,
    }
})

export default styles;