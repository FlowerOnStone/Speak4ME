import { StyleSheet } from 'react-native';
import COLOR from '../../constants/color';
import CONSTANTS from '../../constants/contants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUND,
        width: '100%',
        height: 240,
        paddingHorizontal: '10%',
        paddingVertical: '5%',
    },
    text: {
        color: COLOR.TEXT,
        fontSize: 15,
    },
    addBox: {
        width: '100%',
        height: '18%',
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
    },
    blankBox: {
        flex: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: 1,
    },
    iconBox: {
        // flex: 1,
        // paddingLeft: 15,
        // justifyContent: 'center',
    },
    topicContainer: {
        // flex: 1,
        // height: 200,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    topicText: {
        flex: 9,
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOR.TEXT,
    },
    descriptionText: {
        fontSize: 18,
        color: COLOR.TEXT,
    },
});

export default styles;
