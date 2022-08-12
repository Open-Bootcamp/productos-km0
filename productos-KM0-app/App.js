import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Componente slides
import Sliders from './src/screens/Sliders';
import LoginPage from './src/screens/Login';

const LoadingComponent = () => { 
  return(
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }}>
      <ActivityIndicator color='#FF8F15' size="large" />
    </View>
  )
}

export default function App() {

  const [ loading, setLoading ] = useState(true);
  const [ isFirstTime, setIsFirstTime ] = useState(false);

  useEffect(() => {
    checkOnboarding()
  },[])

  const checkOnboarding = async () => {

    try {
      const result = await AsyncStorage.getItem('$firstTime')
      if(!result){
        setIsFirstTime(true);
      }
    } catch (error) {
      console.log(error, 'unable to get item')
    }

    setLoading(false);
  }

  return (
    <View style={styles.container}>

      
      {
        loading ? <LoadingComponent /> : isFirstTime ? <Sliders /> : <LoginPage />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
