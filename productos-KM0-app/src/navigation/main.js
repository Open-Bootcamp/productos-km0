// Importamos las dependencias necesarias para poder crear nuetro
// enrutador de vistas con navigate
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importamos las vistas u componentes que queremos enrutar
import HomeScreen from "../screens/HomeScreen";

// Creamos un satck mediante la funcion importada para luego usar como componente
const stack = createNativeStackNavigator();

// Creamos el mainstack donde alojaremos todo el enturtado de nuestras vistas
const MainStack = () => {
  return (
    <>
      {/* Envolvemos todo el navegador del stack dentro de un contenedor */}
      <NavigationContainer>
        {/* Nuestro stack de navegador tendra como ruta principal el HomeScreen
        El header se encuentra oculto, en caso de querer visualizar la ruta enn la que se 
        encuentra cambie su valor por true para orientarse y luego vuelva a dejarlo en false */}
        <stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          {/* Mediante las screen vamos a ir agregando nuestras vistas al stack
            Indicando el nombre que tendra esa ruta y el componente que renderizara */}
          <stack.Screen name={"Home"} component={HomeScreen} />
          {/* Como por ejemplo la siguiente screen:
            <stack.Screen name={'ExampleScreen'} component={ExampleScreen} /> */}
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// Importamos el mainstack a la app.js para que sea lo primero en renderizar
export default MainStack;
