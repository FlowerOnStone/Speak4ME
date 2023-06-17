import { StyleSheet } from "react-native";
import COLOR from "../../../constants/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUND,
        width: '100%',
        height: 50,
        paddingHorizontal: '5%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textbox: {
        backgroundColor: "white",
        width: 100,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1, 
        borderRadius: 20, 
        
    },
    text: {
        color: COLOR.TEXT,
        fontSize: 15,
        textAlign: "center", 
        justifyContent: "center", 
    },

})

export default styles;
