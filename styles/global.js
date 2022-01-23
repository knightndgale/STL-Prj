import { StyleSheet, Dimensions} from 'react-native';


export const globalStyles = StyleSheet.create({
    

    textInput: {
        textAlign: 'center',
        padding: 10,
        fontSize: 17,
        marginTop: 1,
        borderBottomWidth: 1,
    },
 
    titleText: {
        paddingLeft: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },

    titleTexth2: {
        paddingLeft: 15,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },

    titleTexth3: {
        paddingLeft: 15,
        fontSize: 15,
        // fontWeight: 'bold',
        color: 'black'
    },

    titleTexth4: {
        paddingLeft: 15,
        fontSize: 14,
        // fontWeight: '400',
        color: 'black'
    },

    headerStyle: {
        paddingLeft: 15,
        fontSize: 17,
        fontWeight: '500',
        color: 'black'
    },

    paragraph: {
        fontSize: 16,
        color: 'black'
    },
    
    horizontalLine: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        width: '100%', 
        marginTop: 5

    },

    tableItemWrapper: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    
    tableHeader: {
        fontWeight: '500',
        fontSize: 14,
        color: 'white',         
       
    },

    tableText: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 0.5,
        fontSize: 15,
        color: 'black',
    }

    

   
});