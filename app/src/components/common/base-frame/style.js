import { StyleSheet } from 'react-native';
import COLOR from '../../../constants/color';

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
        borderWidth: 1,
        borderColor: COLOR.TEXT,
    },
    addBox: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
    },
    itemBox: {
        flex: 5,
        top: -2,
        backgroundColor: COLOR.FRAME,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: '2%',
        zIndex: 2,
        justifyContent: 'space-between',
    },
    blankBox: {
        flex: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 1,
    },
    backgroundBox: {
        padding: 0,
        width: 12,
        height: 12,
        borderStyle: 'solid',
        zIndex: 2,
        right: 18,
        backgroundColor: COLOR.FRAME,
    },
    cycleBox: {
        padding: 0,
        borderTopWidth: 1,
        borderRightWidth: 1,
        width: 12,
        height: 12,
        borderTopRightRadius: 12,
        zIndex: 3,
        backgroundColor: COLOR.BACKGROUND,
        borderStyle: 'solid',
    },
    iconBox: {
        flex: 1,
    },
});

export default styles;
