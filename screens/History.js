import React, { useState} from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,  FlatList, Pressable} from 'react-native';
import { Provider as PaperProvider,  DefaultTheme } from 'react-native-paper';
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
  
  // Pass Bet Data Here
  const [betNumber, setBetNum] = useState('');
  const [betAmount, setBetAmount] = useState('');
  // Pass Bet Data Here


   // Append New Bet Number, Amount and Time Slot
  const [history, setHistory] = useState([
    {iD:'123-1234', betDate:'1/19/2022', time:'11:23 AM', DocNo:'1', key:'1'},
    {iD:'214-4756', betDate:'1/23/2022', time:'11:19 AM', DocNo:'2', key:'2'},
    {iD:'354-9871', betDate:'1/24/2022', time:'12:01 AM', DocNo:'3', key:'3'},
    {iD:'652-7512', betDate:'1/25/2022', time:'09:29 AM', DocNo:'4', key:'4'},
    {iD:'198-5479', betDate:'1/26/2022', time:'03:48 AM', DocNo:'5', key:'5'},
    {iD:'751-8452', betDate:'1/27/2022', time:'07:06 AM', DocNo:'6', key:'6'},
    ]);


   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
         
          <View style={styles.tableHeaderStyle}>
                 
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>ID</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>Bet Date</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>Time</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 70 : 30}]}>Doc No.</Text>
          </View>

            <View style={styles.itemContainer}>
                <FlatList   
                  data={history}
                  renderItem={({item, key}) => (
                    <View style={styles.items}>
                      <Text style={globalStyles.tableText}>{item.iD}</Text>
                      <Text style={globalStyles.tableText}>{item.betDate}</Text>
                      <Text style={globalStyles.tableText}>{item.time}</Text>
                      <Text style={globalStyles.tableText}>{item.DocNo}</Text>
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
  items: {
    flexDirection: 'row'
  },
  
  tableHeaderStyle: {
    backgroundColor: '#4d4b4b',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
 
});