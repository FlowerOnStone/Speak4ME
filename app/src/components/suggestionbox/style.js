import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.background,
        width: '100%',
        height: 50,
        paddingHorizontal: '10%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textbox: {
        backgroundColor: COLOR.lightText,
        width: 80,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    text: {
        color: COLOR.text,
        fontSize: 15,
    },

})

export default styles;
