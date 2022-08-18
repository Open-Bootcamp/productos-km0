import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Buyer from './src/screens/Buyer'

export default function App () {
  return (
    <View style={ styles.container }>
      <Buyer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
