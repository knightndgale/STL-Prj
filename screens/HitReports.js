import React, { useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,  FlatList,  Pressable} from 'react-native';
import { Provider as PaperProvider,  DefaultTheme, Button } from 'react-native-paper';
import { globalStyles } from '../styles/global';


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

export default function App() {

    // To make the table header responsive to device orientation
    const { landscape } = useDeviceOrientation();
    // To make the table header responsive to device orientation
    
   const [currentDate, setCurrentDate] = useState('');

   useEffect(() => {
    // DATE ex: 1/25/2022
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();   
    setCurrentDate(
      month+'/'+date+'/'+year
    )


    
  }, [])

   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
       
          
          <View style={styles.menuHead}>
            <Text style={globalStyles.paragraph}> Draw Date: </Text>
            <Text style={styles.dateStyle}>{currentDate}</Text>


             <Button mode="contained" onPress={() => console.log()}> Change Date </Button>
          </View>


          <View style={styles.tableHeaderStyle}>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Draw</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Bet Key</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Bet Amt</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Doc No.</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Win Amt</Text>
          </View>

          <View style={globalStyles.tableItemWrapper}>
                    <Text style={globalStyles.tableText}>11S</Text>
                    <Text style={globalStyles.tableText}>111-1234</Text>
                    <Text style={globalStyles.tableText}>5</Text>
                    <Text style={globalStyles.tableText}>1</Text>
                    <Text style={globalStyles.tableText}>1500</Text>
          </View>
    
      

        </SafeAreaView>
          
      </PaperProvider>
      
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appHeader:  {
    width: '100%',
  },
  dateStyle: {
    fontSize: 20,
    color: 'black',
    marginTop: 3,
    marginBottom: 6
  },

  menuHead: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,

  },

  
  tableHeaderStyle: {
    backgroundColor: '#4d4b4b',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

});