
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar} from 'react-native';
import { Provider as PaperProvider, Button, TextInput, DefaultTheme, Appbar } from 'react-native-paper';
import { useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
// import { expo } from 'app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#43649D',
    accent: '#5172AA',
  },
};


export default function App() {
  const { landscape } = useDeviceOrientation();
  // const Dimension = userDimensions();
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


 

  {/* <LoginScreen /> */}
   return (
 
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
       
        {/* HEAD */}
        {/* <View style={styles.appHeader}> 
        </View> */}
        <View style={styles.logoContainer}>
            <Image source={require('./assets/logo-test.png')}/>
          </View>
        {/* HEAD */}

         {/* Body */}
        <View style={styles.userInputsContainer}>        
          <TextInput  label="Username" value={username} onChangeText={username => setUsername(username)} />
          <TextInput  label="Password" value={password} onChangeText={password => setPassword(password)} />
        </View>
        <Button mode="contained" onPress={() => console.log('Hello World!')}> Log In </Button>
        {/* Body */}

        {/* Footer */}
        <View style={styles.appFooter}>
          {/* <Text>vs {expo.version}</Text> */}
        </View>
        {/* Footer */}
        
      </SafeAreaView>
       
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeader:{
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // backgroundColor: '#1234',
  
  },
  appFooter: {
  },

  logoContainer: {
    alignItems: 'center',
  },

  userInputsContainer: {
    paddingHorizontal: 60,
    paddingBottom: 20,
    width: '100%',
    // backgroundColor: '#1234',
  },


});
