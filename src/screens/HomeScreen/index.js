// Hooks a utilizar
import React, { useState } from "react";
// Componentes de react native que utilizaremos para maquetar
import { Text, View, TextInput, Pressable, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
// componete de icono traido de la depoendecia vector icons para utilizar
// en la key y el eye del input password
import { Octicons } from "@expo/vector-icons";
// Estilos a utilizar en esta vista
import HomeScrenStyle from "./style";
// validador de los valores de cada input y encargado de manejar los errores que se muestran
import validator from "../../validations/validator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = (props) => {
  const screenNavigation = useNavigation();
  // Mediante esta constante manejamos el error
  const [erroMessage, setErrorMessage] = useState(false);
  // navigation extraida para poder movernos entre vistas
  const { navigation } = props;
  // Aqui guardaremos y modificaremos el valor del input password
  const [password, setPassword] = useState("");
  // Aqui guardaremos y modificaremos el valor del input email
  const [email, setEmail] = useState("");
  // Aqui guardaremos y modificaremos el valor de la seguridad del input password
  // para mostrar o no el texto encriptado
  const [secure, setSecure] = useState(true);

  const removeAsync = async () => {
    // TODO esta funcion es de prueba para eliminar el dato de async storage se quitare luego 
    //await AsyncStorage.removeItem('$firstTimne') // Esta linea se puede descomentar para porbar los sliders
    // Redirigir a la pagina de seleccion de tio de Registro
    screenNavigation.navigate('TipoRegistro');
  }

  return (
    <>
      <View style={HomeScrenStyle.container}>
        <View style={HomeScrenStyle.containerTexts}
        ><Text style={HomeScrenStyle.titlePrimary}>Ingresar</Text>
        <Text style={HomeScrenStyle.titleSecondary}>KM-0</Text></View>
        
        {/* Mediante el valor de verda de la constante "secure" modiuficaremos el icono de eye 
        que se muestra en el input password */}

        <Octicons
          name={secure ? "eye" : "eye-closed"}
          size={18}
          color="black"
          style={HomeScrenStyle.iconEye}
          onPress={() => {
            setSecure(!secure);
          }}
        />

        {/* El icono de key por el contrario se mantiene constante */}
        <Octicons name="key" size={18} style={HomeScrenStyle.iconKey} />
    
        {/* Mediante la existencia de un mensaje de error que devuelve la funcion validadora
        renderizaremos un conjunto u otro de inputs con difernetes estilos que marcaran si hubo un error */}

        {/* Dentro de los TextInputs encontraremos una funcion que escuchara y traera los cambios
           de valor del mismo campo y a la vez seteara el estado de cada uno de los campos*/}
        <TextInput
          style={
            erroMessage
              ? HomeScrenStyle.inputText1Error
              : HomeScrenStyle.inputText1
          }
          placeholder={"Correo electronico"}
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />
        {/* El valor de verdad de "secure" modificara la propiedad secureTextEntry la cual se encarga de
            mostrar el texto encriptado del input password */}
             <Text style={HomeScrenStyle.errorPassword}>{erroMessage}</Text>
        <TextInput
          style={
            erroMessage
              ? HomeScrenStyle.inputText2Error
              : HomeScrenStyle.inputText2
          }
          placeholder={"Contrasena"}
          secureTextEntry={secure}
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
        />

        {/* Este pressable es el encargado de enviar los valores de cada input.
      Contiene un operador ternario el cual verifica la existencia de ambos campos:
                  
      1) Ambos valores seran enviados a una funcion validadora que manejara el estado del error.
      1.a) Si ambas estan correctas seteara el estado del error a falso lo cual estara listo para enviarse los valoresa de estos campos.
      1.b) Si ambos estan incorrectos seteara el estado del error con un mensaje de que ambos campos estan vacios.
      1.c) Si alguno de los campos esta vacio seteara el estado del error con el mensaje de que ese campo especifico se encuentra vacio.
      1.c) De darse el caso de que alguna de ellas si bien tenga un valor, este valor no sea el permitido en los esquemas de validacion 
        seteara el error con el mensaje de erorr de cual sea el problema, a la vez que modificara el error a true lo cual renderizara 
        los inputas con un estilo diferente.
     

      */}
        <Pressable
          style={HomeScrenStyle.buttonSubmit}
          onPress={() => {
            validator(setErrorMessage, {
              email: email,
              password: password,
            }),
              setEmail(""),
              setPassword("");
          }}
        >
          <Text style={HomeScrenStyle.textButtonSubmit}>Ingresar</Text>
        </Pressable>
        <Text style={HomeScrenStyle.textToRestorePassword}>
          ¿Olvidaste tu contraseña?
        </Text>
        <View style={HomeScrenStyle.containLines}>
          <View style={HomeScrenStyle.line1} />
          <Text style={HomeScrenStyle.point}>o</Text>
          <View style={HomeScrenStyle.line2} />
        </View>
        <Pressable style={HomeScrenStyle.buttonGoogle}>
        <Image style={HomeScrenStyle.iconGoogle}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
             
            />
          <Text style={HomeScrenStyle.textButtonGoogle}>
           
            Ingresa con Google
          </Text>
        </Pressable>
        <Pressable style={HomeScrenStyle.buttonToRegister}
          onPress={removeAsync}
        >
          <Text style={HomeScrenStyle.textButtonRegister}>Registrate</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
