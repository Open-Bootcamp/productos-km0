// Hooks a utilizar
import React, { useState } from "react";
// Componentes de react native que utilizaremos para maquetar
import { Text, View, TextInput, Pressable, Image } from "react-native";
// componete de icono traido de la depoendecia vector icons para utilizar
// en la key y el eye del input password
import { Octicons } from "@expo/vector-icons";
// Estilos a utilizar en esta vista
import HomeScrenStyle from "./style";
// imagen de goggle para utilizar como icono en el ingreso por google
import iconGoogle from "../../../assets/iconoGoogle.png";
// validador de los valores de cada input y encargado de manejar los errores que se muestran
import validator from "../../validations/validator";

const HomeScreen = (props) => {
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

  return (
    <>
      <View style={HomeScrenStyle.container}>
        <Text style={HomeScrenStyle.titlePrimary}>Ingresar</Text>
        <Text style={HomeScrenStyle.titleSecondary}>KM-0</Text>
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
        {/* Aqui retornaremos el valor de error que obtengamos de suceder una validacion erronea de los campos */}
        <Text style={HomeScrenStyle.errorPassword}>{erroMessage}</Text>
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
          <Text style={HomeScrenStyle.textButtonGoogle}>
            <Image
              source={{ uri: `${iconGoogle}` }}
              style={HomeScrenStyle.iconGoogle}
            />
            Ingresa con Google
          </Text>
        </Pressable>
        <Pressable style={HomeScrenStyle.buttonToRegister}>
          <Text style={HomeScrenStyle.textButtonSubmit}>Registrate</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
