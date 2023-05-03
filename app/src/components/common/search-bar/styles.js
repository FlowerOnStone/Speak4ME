// import { StyleSheet, Dimensions } from 'react-native';

// const styles = StyleSheet.create({
//     containerStyle: {
//         paddingTop: 0,
//         paddingBottom: 0,
//         // backgroundColor: 'transparent',
//         // borderBottomColor: 'transparent',
//         // borderTopColor: 'transparent',
//     },
//     inputContainerStyle: {
//         height: Dimensions.get('window').width * 0.12,
//         width: '90%',
//         // boxSizing: 'border-box',
//         backgroundColor: '#FFFFFF',
//         borderWidth: 3,
//         borderColor: '#BEBEBE',
//         borderRadius: 25,
//     },
//     leftIconContainerStyle: {

//     },
//     inputStyle: {
//         marginLeft: 6,
//     },
//     rightIconContainerStyle: {

//     },
// });

// export default styles;
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 0,
        paddingBottom: 0,
        // backgroundColor: 'transparent',
        // borderBottomColor: 'transparent',
        // borderTopColor: 'transparent',
        backgroundColor: 'yellow',
        borderRadius: 25,
        // width: '100%',
    },
    inputContainerStyle: {
        // width: 350,
        height: Dimensions.get('window').width * 0.12,
        backgroundColor: '#FFFFFF',
        borderWidth: 3,
        borderBottomWidth: 3,
        borderColor: '#BEBEBE',
        borderRadius: 25,
    },
    leftIconContainerStyle: {

    },
    inputStyle: {
        marginLeft: 6,
    },
    rightIconContainerStyle: {

    },
});

export default styles;
