// Importamos las dependencias necesarias para poder crear nuetro
// enrutador de vistas con navigate
import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { checkUnboardingR } from '../services/userService';
import { useSelector, useDispatch } from 'react-redux';
import TipoRegistro from '../screens/TipoRegistro/TipoRegistro';

import Sliders from "../screens/Sliders/Sliders";
import { CompradorRegister, ProductorRegister } from '../screens/index';
import Spinner from '../screens/Spinner/Spinner';


// Modulo Buyer(comprador)
import Navigation from './navigation';
import { IndexBuyer } from '../modules/buyer';
// Mover la pantalla al stack correspondiente
import ResumenPedido from '../screens/ResumenPedido/ResumenPedido'


// Vista temporal
import LoginScreen from '../screens/HomeScreen/loginScreen'
import ProductorStackNavigation from './Productor/productorStack'
// Creamos un satck mediante la funcion importada para luego usar como componente
const stack = createNativeStackNavigator();
const SlidersStack = createNativeStackNavigator();
const StackProductor = createNativeStackNavigator();
const StackComprador = createNativeStackNavigator();
const StackRegistroComprador = createNativeStackNavigator();
const StackRegistroProductor = createNativeStackNavigator();


// STACK PARA LOS SLIDERS
const SlidersStackNavigation = () => {
  return (
    <NavigationContainer>
      <SlidersStack.Navigator
        initialRouteName='Sliders'
        screenOptions={{ headerShown: false }}
      >
        <SlidersStack.Screen name="Sliders" component={Sliders} />
      </SlidersStack.Navigator>
    </NavigationContainer>
  )
}

// STACK DE NAVEGACION PARA NAVEGACION HOME COMPRADOR Y PANTALLAS ASOCIADAS
const CompradorStackNavigator = () => {
  return(
      <StackComprador.Navigator
        initialRouteName='HomeComprador'
        screenOptions={{ headerShown: false}}
      >
        {/* TODO REEMPLAZAR ESTA VISTA POR EL STACK BOTTOM NAVIGATION PARA COMPRADOR */}
        <StackComprador.Screen name="HomeComprador" component={Navigation} />
        <StackComprador.Screen name='Resumen' component={ResumenPedido} />
        {/* TODO AGREGAR PANTALLAS PARA NAVEGACION DE COMPRADOR */}
      </StackComprador.Navigator>
  )
}

// STACK PARA HOME PRODUCTOR Y PANTALLAS ASOCIADAS
const ProductorStackNavigator = () => {
  return(
      <StackProductor.Navigator
        initialRouteName='HomeProductor'
        screenOptions={{ headerShown: false}}
      >
        <StackProductor.Screen name='HomeProductor' component={ProductorStackNavigation} />
        {/* TODO AGREGAR TODASL LAS PANTALLAN QUE PERTENEZCAN A PRODUCTOR */}
      </StackProductor.Navigator>
  )
}

// STACK DE NAVEGACIOIN PARA REGISTRO COMPRADOR
const CompradorRegistroNavigator = () => {
  return(
      <StackRegistroComprador.Navigator
        initialRouteName='HomeCompradorRegistro'
        screenOptions={{ headerShown: false}}
      >
        <StackRegistroComprador.Screen name='HomeCompradorRegistro' component={CompradorRegister} />
        { /* TODO  PANTALLAS PARA REGISTRO COMPRADOR*/}
      </StackRegistroComprador.Navigator>
  )
}

// STACK DE NAVEGACION PARA REGISTRO PRODUCTOR
const ProductorRegistroNavigator = () => {
  return(
      <StackRegistroProductor.Navigator
        initialRouteName="HomeProductorRegistro"
        screenOptions={{ headerShown: false}}
      >
        <StackRegistroProductor.Screen name="HomeProductorRegistro" component={ProductorRegister} />
        {/* TODO AGREGAR TODAS LAS PANTALLAS QUE PERTENEZCAN AL PRODUCTOR REGISTRO */}
      </StackRegistroProductor.Navigator>
  )
}
// Creamos el mainstack donde alojaremos todo el enturtado de nuestras vistas
const MainStack = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >

          <stack.Screen name="Login" component={ LoginScreen} />
          <stack.Screen name="RegistroHome" component={TipoRegistro} />
          <stack.Screen name='RegistroComprador' component={CompradorRegistroNavigator} />
          <stack.Screen name='RegistroProductor' component={ProductorRegistroNavigator} />
          <stack.Screen name='ProductorHome' component={ProductorStackNavigator} />
          <stack.Screen name='CompradorHome' component={CompradorStackNavigator} />

        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const MainStackNavigator = () => {
  const disptach = useDispatch();
  const { isLoadingR, isFirstTimeR } = useSelector((state) => state.user );
  useEffect(() => {
    disptach(checkUnboardingR());
  },[])

  return isLoadingR ? 
    <Spinner /> : 
    isFirstTimeR ? 
    <SlidersStackNavigation /> :
    <MainStack />
}

export default MainStackNavigator
