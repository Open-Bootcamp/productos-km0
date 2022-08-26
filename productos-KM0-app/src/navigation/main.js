// Importamos las dependencias necesarias para poder crear nuetro
// enrutador de vistas con navigate
import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importamos las vistas u componentes que queremos enrutar
import HomeScreen from "../screens/HomeScreen";
import TipoRegistro from '../screens/TipoRegistro/TipoRegistro';
import Sliders from "../screens/Sliders/Sliders";
import { useSlider } from '../components/hooks/useSlider';
import Spinner from '../screens/Spinner/Spinner';

// Mover la pantalla al stack correspondiente
import ResumenPedido from '../screens/ResumenPedido/ResumenPedido';
import DetallesProductor from '../screens/DetalleProductor/DetalleProductor';

// Creamos un satck mediante la funcion importada para luego usar como componente
const stack = createNativeStackNavigator();
const SlidersStack = createNativeStackNavigator();

// STACK PARA LOS SLIDERS
const SlidersStackNavigation = () => {
  return(
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
          <stack.Screen name={"Home"} component={ HomeScreen} />
          {/* Componente tipo Registro */}
          <stack.Screen name="TipoRegistro" component={TipoRegistro} />
          {/* Pantalla provisional para maquetacion resumen pedido */}
          
          <stack.Screen name='DetalleProductor' component={DetallesProductor} />
          <stack.Screen name="ResumenPedido" component={ResumenPedido} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const MainStackNavigator = () => {
  const { isFirstTime, isLoading, checkUnboarding } = useSlider();  
  useEffect(() => {
    checkUnboarding();
  },[])

  return isLoading ? <Spinner /> : isFirstTime ? <SlidersStackNavigation /> : <MainStack />
}

export default MainStackNavigator;