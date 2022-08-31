import React from "react";
import {Text, TextInput, Image, StyleSheet,View, TouchableOpacity} from "react-native";
import {styles} from "../../components/form-user-register/styles";
import PrimaryButton from "../../components/primary-button";
import {font} from "../../themes/fonts"

const LocationBuyer = ()=>{
return <>
    <View style={{...style.image, position:"absolute", marginLeft:15.2, marginTop:78.33}}><Image source={require("../../../assets/vector-back.png")} /></View>
    <View style={{paddingHorizontal:14,paddingTop:116 }}>
        <View >
            <Text style={style.title}>Ingresa tu ubicación</Text>
        </View>
        <TextInput style={styles.textInput} placeholder="Ejemplo : Calle industriales, 50006"></TextInput>
        <TouchableOpacity onPress={()=>{}}>
            <View style={{...styles.textInput,...style.viewImg}}>
                <Image style={style.imgMap} source={require("../../../assets/vector-map.png")} />
            </View>
        </TouchableOpacity>
        <View style={{marginTop:52 , marginBottom: 38}}>
            <Text style={{...style.text}}>{"Tu ubicación va a ser utilizada para \n mostrarte información personalizada"}</Text>
        </View>
        <PrimaryButton onPress={()=>{}} vectorNext={true} title="Siguiente"></PrimaryButton>
    </View>

</>
}

const style = StyleSheet.create({
    title:{
        fontSize: font.b1.size,
        fontWeight: font.b1.weight,
        fontFamily: font.inter.family
    },
    text:{
        fontSize: font.s1.size,
        fontWeight: font.s1.weight,
        fontFamily: font.s1.family,
        textAlign: "center"
    },
    image:{
        width:17.34,
        height: 8.6
       },
       viewImg:{
        borderRadius:400/2,
        width:195,
        height: 195,
        alignSelf: "center",
        justifyContent:"center",
        alignItems:"center"
    },
    imgMap:{
        width:73,        
        resizeMode: 'contain'
    }
})

export default LocationBuyer;

