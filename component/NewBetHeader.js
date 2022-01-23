import { Appbar } from 'react-native-paper';
import { Platform, View,StyleSheet, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { IconButton, Colors } from 'react-native-paper';

// const drawerDots = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = props => {

    return(
    <Appbar.Header style={styles.container}>
        <View tyle={styles.Right}>

        </View>
        <View style={styles.Right}>
            <IconButton color={Colors.black} size={30} icon="arrow-left"  onPress={() => props.navigation.navigate('Main Menu')} />
            <Text style={globalStyles.headerStyle}>New Bet</Text>    
        </View>

        <View style={styles.Left}>           
            <IconButton color={Colors.black} size={30} icon="content-save"  onPress={() => console.log('Pressed')} />
            <IconButton color={Colors.black} size={30} icon="refresh" onPress={() =>  props.isResetInputNow(true)}/>        
            {/* <Appbar.Action icon={drawerDots} onPress={() => {}} /> */}
        </View>
    </Appbar.Header>
    )
};

const styles = StyleSheet.create({

    Right:  {
        flex: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
  
    Left:   {
        flex: 1,
        width: '50%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

   


  
  });

export default Header;


//    {/* HEAD */}
//    <View style={styles.appHeader}>
//    <DefaultHeader />
//   </View>

//   {/* HEAD */}

//   {/* Body */}

//   {/* Body */}

//   {/* Footer */}
//   <View style={styles.appFooter}>
//     <Text>vs {expo.version}</Text>
//   </View>
//   {/* Footer */}