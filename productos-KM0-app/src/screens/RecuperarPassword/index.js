import React from "react";
import {View, Text , StyleSheet , TextInput ,Image} from "react-native";
import {font} from "../../themes/fonts";
import { styles } from "../../components/form-user-register/styles";
import PrimaryButton from "../../components/primary-button";

const RecoveryPass = ()=>{
    return <>
        <View style={{...style.image, position:"absolute", marginLeft:15.2, marginTop:78.33}}><Image source={require("../../../assets/vector-back.png")} /></View>
        <View style={{paddingHorizontal:14,paddingTop:119}}>
            <Text style={{...style.title, paddingBottom:31 }}>Recuperar contraseña</Text>
            <Text style={{...style.text, paddingBottom:40}}>No te preocupes! Suele suceder, por favor ingresa el número de teléfono asociado con tu cuenta</Text>
            <TextInput style={styles.textInput} placeholder="+375 29 123 45 67" />
            <PrimaryButton title="Enviar" style={{marginTop:20}}/>
        </View>
    </>
}

const style = StyleSheet.create({
   title:{
    fontSize: font.s1.size,
    fontWeight: font.s1.weight,
    fontFamily : font.s1.family,
   } ,
   text:{
    fontSize: font.b1.size,
    fontWeight: font.b1.weight,
    fontFamily: font.inter.family
   },
   image:{
    width:17.34,
    height: 8.6
   }
})

export default RecoveryPass;