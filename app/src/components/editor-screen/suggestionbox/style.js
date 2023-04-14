import { StyleSheet } from "react-native";
import COLOR from "../../../constants/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUND,
        width: '100%',
        height: 50,
        paddingHorizontal: '10%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textbox: {
        backgroundColor: COLOR.LIGHT_TEXT,
        width: 80,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    text: {
        color: COLOR.TEXT,
        fontSize: 15,
    },

})

export default styles;
