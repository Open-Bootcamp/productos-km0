// Importamos las dependencias necesarias para poder crear nuetro
// enrutador de vistas con navigate
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Importamos las vistas u componentes que queremos enrutar
import HomeScreen from '../screens/HomeScreen'
import TipoRegistro from '../screens/TipoRegistro/TipoRegistro'
import Sliders from '../screens/Sliders/Sliders'
import { useSlider } from '../components/hooks/useSlider'
import Spinner from '../screens/Spinner/Spinner'

// Modulo Buyer(comprador)
import Buyer from '../screens/Buyer'
// Mover la pantalla al stack correspondiente
import ResumenPedido from '../screens/ResumenPedido/ResumenPedido'

// Vista temporal
import LoginScreen from '../screens/HomeScreen/loginScreen'
import ProductorStackNavigation from './Productor/productorStack'
// Creamos un satck mediante la funcion importada para luego usar como componente
const stack = createNativeStackNavigator()
const SlidersStack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

// STACK PARA LOS SLIDERS
const SlidersStackNavigation = () => {
  return (
    <NavigationContainer>
      <SlidersStack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <SlidersStack.Screen name="Sliders" component={Sliders} />
      </SlidersStack.Navigator>
    </NavigationContainer>
  )
}
// Creamos el mainstack donde alojaremos todo el enturtado de nuestras vistas
const MainStack = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <stack.Screen name={'Home'} component={ LoginScreen} />
          {/* Componente tipo Registro */}
          <stack.Screen name="TipoRegistro" component={TipoRegistro} />
          <stack.Screen name="Buyer" component={Buyer} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const MainStackNavigator = () => {
  const { isFirstTime, isLoading, checkUnboarding } = useSlider()
  useEffect(() => {
    checkUnboarding()
  }, [])

  return isLoading ? <Spinner /> : isFirstTime ? <SlidersStackNavigation /> : <MainStack />
}

export default MainStackNavigator
