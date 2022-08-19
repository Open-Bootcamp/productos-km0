import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mapa = () => {
  return (
    <View style={styles.container}>
      <Text>Mapa</Text>
    </View>
  )
}

export default Mapa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundCoor: 'gray',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
