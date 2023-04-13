import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        width: '100%',
        height: 50,
        paddingHorizontal: '10%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textbox: {
        backgroundColor: color.lightText,
        width: 80,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    text: {
        color: color.text,
        fontSize: 15,
    },

})

export default styles;