import React from "react";
import { useState } from "react"
import {Text, TextInput, Image, StyleSheet,View, TouchableHighlight} from "react-native";
import {styles} from "../../components/form-user-register/styles";
import PrimaryButton from "../../components/primary-button";
import {font} from "../../themes/fonts";

const PhoneNumber = ()=>{
    const [data, setData]= useState({telefono:""})
    
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/;
    
    const handleSubmit=()=>{
        if(reg.test(data.telefono)){
            console.log(data.telefono);
            return;
        }
    }
      
return<>
    <View style={{...style.image, position:"absolute", marginLeft:15.2, marginTop:78.33}}><Image source={require("../../../assets/vector-back.png")} /></View>
    <View style={{paddingHorizontal:14,paddingTop:116 }}>
        <View>
            <Text style={style.title}>Ingresa tu número de teléfono</Text>
        </View>
        <View style={{paddingTop:29}}>
            <Text style={style.text}>Sólo lo utilizaremos para enviarte un código de verificación por SMS. Si te parece bien, haz clic en "enviar". </Text>
        </View>
        <View style={{marginTop:40}}>
            <TextInput keyboardType="phone-pad" onChangeText={(e)=>setData({telefono:e})} style={{...styles.textInput,marginBottom:20}} placeholder={"+375 29 123 45 67"}  />
            <PrimaryButton onPress={handleSubmit} title="Enviar" vectorNext={true} />
        </View>
        
    </View>
</>
}

const style = StyleSheet.create({
    text:{
        fontSize: font.b1.size,
        fontWeight: font.b1.weight,
        fontFamily: font.inter.family
    },
    title:{
        fontSize: font.s1.size,
        fontWeight: font.s1.weight,
        fontFamily: font.s1.family,
    }
})

export default PhoneNumber;