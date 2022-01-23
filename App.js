
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,  FlatList, Pressable, } from 'react-native';
import { Provider as PaperProvider,  DefaultTheme, IconButton, Colors } from 'react-native-paper';
import {  MaterialIcons } from '@expo/vector-icons';


import { expo } from './app.json'; // app version
import { globalStyles } from './styles/global'; // global styles
// import Routes from './';

import NewBet from './screens/NewBet';
import BetCancel from './screens/BetCancel';
import Claim from './screens/Claim';
import HitReport from './screens/HitReports';
import History from './screens/History';
import Printer from './screens/SetupPrinter';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#15A3D9',
    accent: '#5172AA',
  },
};



const Stack = createNativeStackNavigator();

export default function App  () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* You can set the first or initial screen in the Stack.Navigator
        initialRouteName="firstScreen" 
        */}
         <Stack.Screen component={Main} name="Main Menu" />
        <Stack.Screen component={NewBet} name="New Bet" options={{  
          headerShown: false,
         }}/>

         {/*  headerRight: () => (
            <View style={styles.headerIconContainer}> 
                <IconButton color={Colors.black} size={30} icon="content-save"  onPress={() => console.log('Pressed')} />
                <IconButton color={Colors.black} size={30} icon="refresh" />           
            </View>), */}
            
        <Stack.Screen component={BetCancel} name="Cancel Doc" />
        <Stack.Screen component={Claim} name="Claim"/>
        <Stack.Screen component={History} name="History"/>
        <Stack.Screen component={HitReport} name="Hits"/>    
        <Stack.Screen component={Printer} name="Setup Printer"/>          
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const Main = ({navigation}) => {
 

   // You can use this to create a new button
   // Remember that you need to create a new component and call it in the stack navigator
   const [DynaButton, setDynaButton] = useState ([
      { title: 'New Bet', iconName: 'create',  id: '1' },
      { title: 'History',   iconName: 'history',  id: '2' },
      { title: 'Hits',  iconName: 'fact-check',  id: '3' },
      { title: 'Claim',   iconName: 'attach-money',  id: '4' },
      { title: 'Cancel Doc',  iconName: 'cancel-presentation',  id: '5' },
      { title: 'Sales',   iconName: 'point-of-sale', id: '6' },
      { title: 'Setup Printer',    iconName: 'print',  id: '7' },
      { title: 'Log Out',    iconName: 'logout',  id: '8' },
    ]);
  
   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          
          <View style={styles.menuHead}>
   

            {/* Logo and App Version */}
            <Image 
            style={{width: 100, height: 100}}
            resizeMode= 'contain'
            source={require('./assets/logo-test.png')}/>
            <Text>vs {expo.version}</Text>
            {/* Logo and App Version */}

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
                  onPress={() => navigation.navigate(item.title)}
                  // You can pass object to any screen through adding object after the screen name
                  //Ex: onPress={() => navigation.navigate(item.title, objectName)}
                  

                  // You can access this object by catching method
                  // ex: const Main = ({navigationObjection}) => {
                  // return(
                  //   <View>{navigation.getParam('name')}</View>
                  // )


                  
                  // Other pressable event example
                  // onPressIn={() => onPress("onPressIn")}
                  // onPressOut={() => onPress("onPressOut")}
                  // onLongPress={() => onPress("longPress")}

                  style={({ pressed }) =>[
                    {
                      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                      borderRadius: 10
                      // On press effect and button properties
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
                
              )}/>

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

  headerIconContainer: {
    flexDirection: 'row',

    
    
  },

});
