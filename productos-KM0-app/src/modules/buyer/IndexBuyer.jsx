import { SafeAreaView } from 'react-native'
import React from 'react'
import TopNavigator from './components/TopNavigator'
import HeaderWelcome from './components/HeaderWelcome'

const IndexBuyer = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderWelcome />
      <TopNavigator />
    </SafeAreaView>
  )
}

export default IndexBuyer
