import { StyleSheet } from "react-native";
import COLOR from "./color";

const STYLES = StyleSheet.create({
	underlineInputBox: {
        width: "100%",
        height: 45,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: '#BEBEBE',
        marginVertical: 10,
        fontSize: 20,
        paddingLeft: 15,
	}, 
	underlineInputTitle: {
        width: "100%",
        fontSize: 17,
        marginTop: 16, 
	},
	requirementTextbox: {
		width: "90%", 
		color: "gray",
	},
	errorTextbox: {
		width: "90%", 
		color: "red",
	},
	loginRegisterInputBox: {
		height: 75,
		width: "90%",
		backgroundColor: '#fff',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: '#BEBEBE',
		elevation: 5,
		marginVertical: 15,
		flexDirection: 'row',
		fontSize: 20,
		paddingLeft: 15
	},
	greenButton: {
		backgroundColor: '#50D890',
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 30,
		marginVertical: 20,
		paddingVertical: 25,
		borderRadius: 20,
		elevation: 5,
		width: "90%", 
		alignItems: 'center', 

	},
	greenButtonText: {
		fontSize: 28,
		color: '#000000',
	},
	container: {
		backgroundColor: COLOR.BACKGROUND,
		height: "100%",
		justifyContent: 'center',
		alignItems: 'center',
		width: "100%",
	},
	contentContainer: {
		backgroundColor: COLOR.BACKGROUND,
		height: "93%",
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',  
		width: "100%",
	},
});

export default STYLES;
