import { StyleSheet } from "react-native";
import color from "../../constants/color";

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: color.title,
        flexDirection: 'row',
    },
    backButtonContainer: {
        flex: 1,
        backgroundColor: color.lightText,
    },
    titleTextContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingButtonContainer: {
        flex: 1,
        backgroundColor: color.lightText,
      },
    titleText: {
        color: color.text,
        fontSize: 32,
        fontWeight: 'bold',
    },
})

export default styles;