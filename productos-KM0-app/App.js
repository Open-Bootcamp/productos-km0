import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/navigation'
import MainStackNavigator from './src/navigation/main'
import { SliderProvider } from './src/components/context/SliderContext'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'

export default function App () {
  const [loaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    Inter: require('./assets/fonts/Inter.ttf')
  })
  if (!loaded) {
    return <ActivityIndicator />
  }
  return (
    <>
      <Provider store={store}>
        <SliderProvider>
          <MainStackNavigator>
            {/* <NavigationContainer>
              <Navigation />
            </NavigationContainer> */}
          </MainStackNavigator>
        </SliderProvider>
      </Provider>
    </>
  )
}
