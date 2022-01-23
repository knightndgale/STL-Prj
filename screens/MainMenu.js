
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,  FlatList, Pressable} from 'react-native';
import { Provider as PaperProvider,  DefaultTheme,  } from 'react-native-paper';
import {  MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#15A3D9',
    accent: '#5172AA',
  },
};

export default function App() {
 
   const [DynaButton, setDynaButton] = useState ([
      { title: 'New Bet', iconName: 'create',  id: '1' },
      { title: 'History',  iconName: 'history',  id: '2' },
      { title: 'Hits',  iconName: 'fact-check',  id: '3' },
      { title: 'Claim',   iconName: 'attach-money',  id: '4' },
      { title: 'Cancel Doc', iconName: 'cancel-presentation',  id: '5' },
      { title: 'Sales', iconName: 'point-of-sale', id: '6' },
      { title: 'Setup Printer',  iconName: 'print',  id: '7' },
      { title: 'Log Out',  iconName: 'logout',  id: '8' },
    ]);
  
    const onPress = (pressedBtnName) => {
      console.log(pressedBtnName);
      //onPressHere
    }

   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>

          <View style={styles.menuHead}>
            <Image 
            style={{width: 100, height: 100}}
            resizeMode= 'contain'
            source={require('../assets/logo-test.png')}/>
            {/* <Text>vs {expo.version}</Text> */}
          </View>

          <View style={styles.menuBody}>
 
          <FlatList
            contentContainerStyle={{ minHeight: `100%` }}
            numColumns={3}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View style={{height: 95}}/>}
            data={DynaButton}
            
            renderItem={({item}) => (

                <View style={styles.box}>         
                <Pressable 
                onPress={() => onPress( item['title'] )}
                
                //Other pressable event
                // onPressIn={() => onPress("onPressIn")}
                // onPressOut={() => onPress("onPressOut")}
                // onLongPress={() => onPress("longPress")}
                //-------------------------------------

                style={({ pressed }) =>[
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                  }
                ]}
                >
                
                  <View style={styles.boxButton}>
                    <MaterialIcons name={item.iconName} size={30}   color="black" />
                    <View style={styles.buttonText}>
                      <Text style={globalStyles.paragraph}>{item.title}</Text>
                    </View>
                  </View>

                  </Pressable>
                </View>
              
            )}
          
          />

        </View>

        </SafeAreaView>
        
      </PaperProvider>
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appHeader:{
    width: '100%',
  },

  menuHead: {
      
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      paddingTop: 15,
      paddingBottom:3,

  },

  menuBody: {

  borderTopWidth: 2,
  borderTopColor: '#eee',
  paddingTop: 3,
  paddingHorizontal: 15,
  
  width: '100%',
  height: '70%',
},

box: {
  width: '33%',
  padding: 3,
},

buttonText: {
  paddingTop: 10,
},

boxButton: {
  paddingVertical: 20,
  borderWidth: 1,
  borderRadius: 10,
  borderColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
},

appFooter: {
},


});

