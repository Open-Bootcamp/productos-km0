import React from "react";
import { useState } from "react"
import {Text, TextInput, Image, StyleSheet,View} from "react-native";
import {styles} from "../../components/form-user-register/styles";
import PrimaryButton from "../../components/primary-button";
import {font} from "../../themes/fonts";
import {colors} from "../../themes/colors"
import { useRef } from "react";

const VerificationNumber = ()=>{
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()

    const [codigo, setCodigo ] = useState({a:"",b:"",c:"",d:""})
        
    const handleSubmit=()=>{
        if(codigo.a !== "" && codigo.b !== "" && codigo.c !== "" && codigo.d !== ""){
            console.log(codigo);
        }
    }

    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [isFocused4, setIsFocused4] = useState(false);

    const [complete1, setComplete1 ] = useState(false);
    const [complete2, setComplete2 ] = useState(false);
    const [complete3, setComplete3 ] = useState(false);
    const [complete4, setComplete4 ] = useState(false);

    
    const handlePress1 = (e)=>{
        console.log(e.length==1);
        if(e.length == 1){
            setComplete1(true)
        }else{
            setComplete1(false)
        }
        if(e!==""){
            input2.current.focus()
        }
        setCodigo({...codigo,a:e})
    }
    const handlePress2 = (e)=>{
        if(e.length == 1){
            setComplete2(true)
        }else{
            setComplete2(false)
        }
        e!=="" &&  input3.current.focus()
        setCodigo({...codigo,b:e})
    }
        
    const handlePress3 = (e)=>{
        if(e.length == 1){
            setComplete3(true)
        }else{
            setComplete3(false)
        }
        e!=="" &&  input4.current.focus()
        setCodigo({...codigo,c:e})
    }

    const handlePress4 = (e)=>{
        if(e.length == 1){
            setComplete4(true)
        }else{
            setComplete4(false)
        }
        setCodigo({...codigo,d:e})
    }
      
return<>
    <View style={{...style.image, position:"absolute", marginLeft:15.2, marginTop:78.33}}><Image source={require("../../../assets/vector-back.png")} /></View>
    <View style={{paddingHorizontal:14,paddingTop:116 }}>
        <View>
            <Text style={style.title}>Ingresa tu código de verificación</Text>
        </View>
        <View style={{paddingTop:29}}>
            <Text style={style.text}>Por favor, introduzca el código de verificación que le proporcionamos</Text>
        </View>
        <View style={{marginTop:40}}>
            <View style={{flexDirection:"row" ,justifyContent:"space-between",marginBottom:20}} >
                <TextInput 
                maxLength={1}
                style={[style.inputVerification, isFocused1 && {backgroundColor:"rgba(242, 190, 31, 1)"}, complete1 && {backgroundColor:"rgba(74, 216, 152, 0.5)"}]}
                onBlur={() => setIsFocused1(false)}
                onFocus={() => setIsFocused1(true)}
                onChangeText={handlePress1}
                ref={input1}
                ></TextInput>
                <TextInput
                maxLength={1}
                style={[style.inputVerification, isFocused2 && {backgroundColor:"rgba(242, 190, 31, 1)"},complete2 && {backgroundColor:"rgba(74, 216, 152, 0.5)"}]}
                onBlur={() => setIsFocused2(false)}
                onFocus={() => setIsFocused2(true)}
                onChangeText={handlePress2}
                ref={input2}
                ></TextInput>
                <TextInput 
                maxLength={1}
                style={[style.inputVerification, isFocused3 && {backgroundColor:"rgba(242, 190, 31, 1)"}, complete3 && {backgroundColor:"rgba(74, 216, 152, 0.5)"}]}
                onBlur={() => setIsFocused3(false)}
                onFocus={() => setIsFocused3(true)}
                onChangeText={handlePress3}
                ref={input3}
                ></TextInput>
                <TextInput 
                style={[style.inputVerification, isFocused4 && {backgroundColor:"rgba(242, 190, 31, 1)"}, complete4 && {backgroundColor:"rgba(74, 216, 152, 0.5)"}]}
                onBlur={() => setIsFocused4(false)}
                onFocus={() => setIsFocused4(true)}
                onChangeText={handlePress4}
                ref={input4}
                ></TextInput>
            </View>
            <PrimaryButton onPress={handleSubmit} title="Enviar" vectorNext={true} />
        </View>
    </View>
</>
}

const style = StyleSheet.create({
    inputVerification:{
        backgroundColor: colors.inputFieldBackground,
        width:67,
        height: 51,
        borderRadius:20,
        textAlign:"center"
    },
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

export default VerificationNumber;