
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, DefaultTheme } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    primary: '#ABDFEA',
    accent: '#5172AA',
  },
};


export default function App() {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted')
    })();
  }

  // Request camera persmission!
  useEffect(()=> {
    askForCameraPermission();
  }, []);

  // Event when scanning bar code
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);

    console.log('Type:'+type+'\nData:' + data);
  }; 


  if (hasPermission === null){
    return(
      <View style={styles.container}>
        <Text>Requesting for camera permission...</Text>
      </View>
    )
  }


  if(hasPermission === false){
    return(
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>
    )
  }

  return (
    <PaperProvider theme={theme}>

        <View style={styles.appHeaderUser}></View>
        <View style={styles.container}>
          <View style={styles.TextContainer}>
            <Text style={styles.headline}>Place the QR code inside the area!</Text>
            <Text style={styles.subheadline}>Scan will start automatically</Text>
          </View>
          <View style={styles.QRcontainer}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{height: 400, width: 400}}/>
          </View>
          <Text style={styles.mainText}>{text}</Text>
          {scanned && <Button icon="camera" mode="contained" onPress={() => setScanned(false)}> Tap To Scan Again </Button>}

        </View>
    </PaperProvider>
  );
}
// I'm here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextContainer: {
    margin: 10,
    alignItems: 'center',
    textAlign: 'center',
  },

  headline: {
    fontSize: 15,
  },

  subheadline: {
    color: '#A5A8AC',
  },

  QRcontainer: {
    margin: 15,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 30, 
  },
  appHeader:{
    width: '100%',
  },


});
