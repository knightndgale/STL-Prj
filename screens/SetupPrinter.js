import React, { useState} from 'react';
import {  StyleSheet, Text, View, SafeAreaView,} from 'react-native';
import { Provider as PaperProvider,  DefaultTheme, Button } from 'react-native-paper';
import { globalStyles } from '../styles/global';



// import {BluetoothManager,BluetoothEscposPrinter,BluetoothTscPrinter} from '../react-native-bluetooth-escpos-printer';

import { useDeviceOrientation} from "@react-native-community/hooks";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#ABDFEA',
    accent: '#5172AA',
  },
};

export default function Printer() {


  // To make the table header responsive to device orientation
  const { landscape } = useDeviceOrientation();
  // To make the table header responsive to device orientation
  
  // Pass Bet Data Here
  const [rxText, setRx] = useState('<Read Buffer>');
  const [status, setStatus] = useState('<Bluetooth Status>');
  // Pass Bet Data Here
  

   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
         
          <View style={styles.statusContainer}>
                    <View style={styles.rxStyle}>
                    <Text style={globalStyles.titleTexth4}>RX:</Text>
                    <Text style={globalStyles.titleTexth3}>{rxText}</Text>
                    
                    </View>
 

                    <View style={styles.statusStyle}>
                    <Text style={globalStyles.titleTexth4}>Status:</Text>
                    <Text style={globalStyles.titleTexth2}>{status}</Text>
                    </View>
                    
                    
          </View>

            <View style={styles.itemContainer}>

            <Button mode="contained"  style={styles.buttonStyle}> Bluetooth On </Button>

            <Button mode="contained"  style={styles.buttonStyle}> Bluetooth Off </Button>

            <Button mode="contained"  style={styles.buttonStyle}> Show Paired Devices </Button>

            <Button mode="contained"  style={styles.buttonStyle}> Discover New Devices</Button>

                    
            </View>

    
      

        </SafeAreaView>
          
      </PaperProvider>
      
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  buttonStyle: {
    marginVertical: 10
  },
  
  statusContainer: {
    paddingVertical: 20,
    marginLeft: 20,
  },

  statusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rxStyle: {
    flexDirection: 'row',
    marginBottom: 5,
  }

  
 
});