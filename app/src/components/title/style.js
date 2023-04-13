import { StyleSheet } from "react-native";
import COLOR from "../../constants/color";

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: COLOR.TITLE,
        flexDirection: 'row',
    },
    backButtonContainer: {
        flex: 1,
        backgroundColor: COLOR.LIGHT_TEXT,
    },
    titleTextContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingButtonContainer: {
        flex: 1,
        backgroundColor: COLOR.LIGHT_TEXT,
      },
    titleText: {
        color: COLOR.TEXT,
        fontSize: 32,
        fontWeight: 'bold',
    },
})

export default styles;
