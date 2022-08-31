import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import NofiticationContainer from './UI/NotificationContainer';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const HeaderHome = () => {

  const { user } = useSelector( (state) => state.user );

  return (
    <LinearGradient 
      style={styles.headerContainer}
      colors={[ '#FF8F15', '#FF8F15']}
      start={[0, 0]}
      end={[1, 1]}
      //style={styles.gradientContainer}
    >
      <View style={styles.subContainer}>
        <Text style={styles.textHeader}>Hola! <Text style={styles.textuser}>{user.name}</Text></Text>
        <NofiticationContainer />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({  
  textuser: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#f2f3f5'
  },
  textHeader: {
    fontFamily: 'Inter',
    fontWeight: '600', 
    fontSize: 23, 
    color: 'white' 
  },
  headerContainer: {
    //backgroundColor: '#F8AA1B', 
    padding: 18, 
    height: screenHeight * 0.10,
  },
  subContainer: {
    marginTop: screenHeight * 0.02,
    height: screenHeight * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default HeaderHome;
