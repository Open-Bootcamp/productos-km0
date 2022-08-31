import { SafeAreaView, View, StyleSheet } from 'react-native';
import React from 'react';
import TopNavigator from './components/TopNavigator';
import HeaderHome from './components/HeaderHome';
import HeaderWithFilter from './components/HeaderWithFilter';
import { useSelector } from 'react-redux';

const IndexBuyer = () => {

  const { initialRoute } = useSelector( (state) => state.navigationslice )

  return (
    <View style={styles.mainContainer}>
      {
        initialRoute === 'Mapa' ? <HeaderHome /> : <HeaderWithFilter />
      }
      <TopNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',
    flex: 1
  }
})

export default IndexBuyer
