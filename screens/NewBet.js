import React, { useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,  FlatList, TextInput, Pressable, Modal, IconButton} from 'react-native';
import { Provider as PaperProvider,  DefaultTheme, Button } from 'react-native-paper';
import {  Entypo } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import {ModalPicker} from '../component/ModalPicker';
import Header from '../component/NewBetHeader';

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





export default function App  ({navigation}) {


  // To make the table header responsive to device orientation
  const { landscape } = useDeviceOrientation();
  // To make the table header responsive to device orientation
  
  // Get User Data Here
  const [userDetail] = useState (
    {name: 'Joan', area: 'Balabagan10'}
  );
  // Get User Data Here
 
  // ------------- Pass and Get TimeSlot Data Here ----------------------
  //WARNING: SET USE STATE TO THE FIRST TIMESLOT AVAILABLE FOR THE REST OF THE DAY
  const [selectedTimeSlot, setTimeSlot] = useState('9S');
  const [isModalVisible, setisModalVisble] = useState(false);

  const changeModalVisiblity = (bool) => {
    setisModalVisble(bool)
  };

  const setChosenTimeSlot = (option) => {
    setTimeSlot(option);
  };

  //WARNING: SET USE STATE TO THE FIRST TIMESLOT AVAILABLE FOR THE REST OF THE DAY
   
  // Insert Bet Data Here

  const [betNumber, setBetNum] = useState('')
  const [betAmount, setBetAmount] = useState('')
  const [betInfo, setBetInfo] = useState([]);
 

  const isResetInputNow = (bool) => {
    if (bool)
    {
      Alert.alert(
        "Warning!",
        "Are you sure to reset your betting records?",
        [
          {
            text: "Cancel"
          },
          { text: "OK", onPress: () =>  setBetInfo([])}
        ]
      );
      
    }
  };
  // Insert Bet Data Here


  // -------------- INSERT TO DB -----------------
  // Append the bet info to flatlist and call insert function all of the bet info into the database
   const appendBet = (bet, amt, timeslot) =>{

     if(betAmount === '' && betNumber === '')
     {
         Alert.alert("WARNING!", "Please fill required fields!");
     }
     else{
      //WARNING ---------- ADD VALIDATION TO GET WINNING AMOUNT
      setBetInfo(betInfo => [...betInfo, {betNum: bet, betAmt: amt, winAmt: '2000', selectedTS: timeslot, key: (betInfo.length + 1)}]);
      setBetNum('');
      setBetAmount('');
      console.log({betInfo});
     }    
   };
  // -------------- INSERT TO DB -----------------


  // Append the bet info to flatlist and call insert function all of the bet info into the database
 
  // WARNING ***
  // CHANGE DEVICE DATE TIME TO SERVER OR ONLINE DATE TIME
  // TO AVOID DATE AND TIME CHEATING
  const [currentDate, setCurrentDate] = useState('');
  const [curentTime, setCurrentTime] = useState('');

  // LAG LAG LAG
  // useEffect(() => {
  //   // DATE ex: 1/25/2022
  //   var date = new Date().getDate();
  //   var month = new Date().getMonth();
  //   var year = new Date().getFullYear();
  //   // TIME ex: 1:54 PM
  //   var hours = new Date().getHours();
  //   var minutes = new Date().getMinutes();
  //   var suffix = hours >= 12 ? "PM" : "AM";
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   var timeNow = ((hours + 11 ) % 12 + 1 + ":"+ minutes +" "+suffix  )
   
  //   setCurrentDate(
 
  //     month+'/'+date+'/'+year
  //   )
  //   setCurrentTime(
  //     timeNow
  //   )
  // }, []);
  // LAG LAG LAG
  // WARNING ***
  // CHANGE DEVICE DATE TIME TO SERVER OR ONLINE DATE TIME
  // TO AVOID DATE AND TIME CHEATING
  


   return (

      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>

          <View style={styles.appHeader}>
            <Header navigation={navigation}
            isResetInputNow={isResetInputNow}/>
          </View>

          <View style={styles.appHeaderUser}>
             
                  <View style={styles.nameDate}>
                    <Text style={globalStyles.paragraph}>{userDetail.name}</Text>
                  </View>
                  <Entypo name="dots-two-vertical" size={15} style={{paddingRight: 10}} color="black" />
                  <View style={styles.areaTime}>
                    <Text style={globalStyles.paragraph}>{userDetail.area}</Text>
                  </View>
    
          </View>
          <View style={styles.appHeaderDateTime}>
             
                  <View style={styles.nameDate}>
                    <Text style={globalStyles.paragraph}>1/20/2022</Text>
                  </View>
                  <View style={styles.areaTime}>
                    <Text style={globalStyles.paragraph}>9:45 PM</Text>
                  </View>
          </View>
          <View style={styles.inputContainer}>        
            <TextInput keyboardType='number-pad' value={betNumber}   onChangeText={number => setBetNum(number)} maxLength={3} style={globalStyles.textInput}  placeholder='Bet Number'/>
            <TextInput keyboardType='number-pad'    value={betAmount}   onChangeText={amount => setBetAmount(amount)} style={globalStyles.textInput} placeholder='Bet Amount'  />
          

            <Pressable style={styles.pickerStyle}
            onPress={() => changeModalVisiblity(true)}>
              <Text style={styles.pickerTextStyle}>{selectedTimeSlot}</Text>
              <Entypo name="triangle-down" size={15} style={{paddingRight: 10}} color="#1F1F1F" />
            </Pressable>

           <Button mode="contained" onPress={() => appendBet(betNumber, betAmount, selectedTimeSlot)} > Append </Button>


           <Modal
              transparent={true}
              animationType='fade'
              visible={isModalVisible}
              onRequestClose={()=> changeModalVisiblity(false)}
              >
                <ModalPicker 
                changeModalVisiblity={changeModalVisiblity}
                setChosenTimeSlot={setChosenTimeSlot}/>

            </Modal>
          </View>
          <View style={globalStyles.horizontalLine} />
          <View style={styles.tableHeaderStyle}>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Bet Number</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Bet Amount</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Win Amount</Text>
                    <Text style={[globalStyles.tableHeader, {paddingHorizontal: landscape ? 50 : 10}]}>Draw</Text>
          </View>
          <View style={{marginHorizontal: 7}}> 

                <FlatList
                  //  ListFooterComponent={<View style={{height: 150}}/>}
                  data={betInfo}
                  renderItem={({item, key}) => (
                    <View style={styles.items}>
                      <Text style={globalStyles.tableText}>{item.betNum}</Text>
                      <Text style={globalStyles.tableText}>{item.betAmt}</Text>
                      <Text style={globalStyles.tableText}>{item.winAmt}</Text>
                      <Text style={globalStyles.tableText}>{item.selectedTS}</Text>
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

  appHeader: {
    width: '100%',
  },

  items: {
    flexDirection: 'row'
  },

  appHeader:{
    width: '100%',
  },

  buttonStyle: {
    marginTop:10,
  },

  tableHeaderStyle: {
    marginHorizontal: 7,
    marginTop: 7,
    backgroundColor: '#4d4b4b',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  pickerStyle:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,   
  },

  pickerTextStyle:{
    fontSize: 18,
  },  

  appHeaderUser: {
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 10,
      backgroundColor: '#15A3D9',
  },
  inputContainer:{
    paddingHorizontal: 10,
  },

  appHeaderDateTime: {
    // alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,

    marginTop: 1,
    backgroundColor: '#949494',
  },


  nameDate: {
    width: '50%',
    paddingLeft: 20,
  },

  areaTime: {
    width: '50%',

  },


});

