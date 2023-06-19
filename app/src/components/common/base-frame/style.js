import { StyleSheet } from 'react-native';
import COLOR from '../../../constants/color';
import CONSTANTS from '../../../constants/contants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUND,
        width: '100%',
        height: 375,
        paddingHorizontal: '10%',
        paddingTop: '3%',
        paddingBottom: '10%',
        alignItems: 'center',
    },
    text: {
        color: COLOR.TEXT,
        fontSize: 15,
    },
    textBox: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOR.FRAME,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        borderStyle: 'solid',
        borderWidth: CONSTANTS.BORDER_WIDTH,
        borderColor: COLOR.TEXT,
    },
    addBox: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
    },
    itemBox: {
        flex: 4,
        top: -3,
        backgroundColor: COLOR.FRAME,
        borderBottomWidth: CONSTANTS.BORDER_WIDTH,
        borderRightWidth: CONSTANTS.BORDER_WIDTH,
        borderLeftWidth: CONSTANTS.BORDER_WIDTH,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: '2%',
        zIndex: 2,
        justifyContent: 'space-between',
    },
    blankBox: {
        flex: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 1,
    },
    iconBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//export default styles;
