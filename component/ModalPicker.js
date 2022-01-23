import React from 'react'
import {  MaterialIcons } from '@expo/vector-icons';
import {
    SafeAreaView,StyleSheet, Text, View, Pressable, ScrollView
} from 'react-native'
import { globalStyles } from '../styles/global';

// SHOW ARRAY OF TIME
// '11L', '1S', '1L' ,'2S', '2L'
const OPTIONS =['9S', '9L']
// SHOW ARRAY OF TIME

// const WIDTH = Dimensions.get('window').width;

const ModalPicker = (props) => {

    const onPressItem =(option) => {
        props.changeModalVisiblity(false);
        props.setChosenTimeSlot(option);
    }

    const option = OPTIONS.map((item, index) => {
        return(
            <Pressable
            style={style.option}
            key={index}
            onPress={() => onPressItem(item)}
            >
                <Text style={style.textStyle}>
                    {item}
                </Text>

            </Pressable>
        )
    })


        return(
            <SafeAreaView style={style.container}>
            <Pressable 
         
            // key={index}
            onPress={() => props.changeModalVisiblity(false)}
            >

                <View style={[style.modalStyle, {width: '80%'}]}>
                    {/* <Text style={style.text}>
                        {item}
                    </Text> */}
                    <View style={style.modalHead}>
                        <Text style={[globalStyles.titleText, {paddingTop: 8, width: '85%'}]}>Draw</Text>
                        <View style={style.iconContainer}>
                        <MaterialIcons name="close" size={24} color="black" onPress={() => props.changeModalVisiblity(false)}/>
                        </View>

                    </View>
                    <ScrollView>
                        {option}
                    </ScrollView>
                </View>

            </Pressable>
            </SafeAreaView>
        )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(50, 50, 50, 0.4)'
        
    },

    modalHead: {
        flexDirection: 'row',
    },

    iconContainer: {
        padding: 5,
        alignItems: 'flex-end',
        // backgroundColor: '#1534',
        width: '15%',
    },

    modalStyle: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingBottom: 10,
        
    },

 

    
    textStyle: {
        marginVertical: 10,
        fontSize: 20,
        width: '100%',
        textAlign: 'center',

 
    }

})

export {ModalPicker}