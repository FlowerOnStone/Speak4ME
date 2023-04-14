import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.background,
        width: '100%',
        height: 100,
        paddingHorizontal: '10%',
        paddingVertical: '3%',
    },
    text: {
        color: COLOR.text,
        fontSize: 15,
    },
    textBox: {
        width: '100%',
        height: '75%',
        backgroundColor: COLOR.frame,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: COLOR.text,
    },
    addBox: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
    },
    itemBox: {
        flex: 4,
        top: -2,
        backgroundColor: COLOR.frame,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: '2%',
        zIndex: 2
    },
    blankBox: {
        flex: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 1
    },
    backgroundBox: {
        padding: 0,
        width: 12,
        height: 12,
        borderStyle: "solid",
        zIndex: 2,
        right: 18,
        backgroundColor: COLOR.frame,
    },
    cycleBox: {
        padding: 0,
        borderTopWidth: 1,
        borderRightWidth: 1,
        width: 12,
        height: 12,
        borderTopRightRadius: 12,
        zIndex: 3,
        backgroundColor: COLOR.background,
        borderStyle: "solid",
    },
    iconBox: {
        flex: 1,
    }
})

export default styles;
