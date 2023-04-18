import { StyleSheet } from 'react-native';
import COLOR from '../../../constants/color';
import { color } from 'react-native-reanimated';
import CONSTANTS from '../../../constants/contants';

const styles = StyleSheet.create({
    backgroundBox: {
        padding: 0,
        width: 12,
        height: 12,
        borderStyle: 'solid',
        zIndex: 2,
        left: -11, 
        backgroundColor: COLOR.FRAME,
        position: "absolute"
    },
    cycleBox: {
        padding: 0,
        borderWidth: CONSTANTS.BORDER_WIDTH,
        width: 12,
        height: 12,
        borderTopRightRadius: 12,
        zIndex: 3,
        backgroundColor: COLOR.BACKGROUND,
        borderStyle: 'solid',
        top: 1,        
    },
    backgroundCycleBox: {
        width: 10, 
        height: 10, 
        borderTopRightRadius: 10,        
        backgroundColor: COLOR.BACKGROUND,
        top: 2,
        right: 2, 
    },
});

export default styles;
