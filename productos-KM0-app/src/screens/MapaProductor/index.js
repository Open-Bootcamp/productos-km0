import React from "react";
import {View, Image, StyleSheet,Text, ImageBackground, TextInput} from "react-native";
import {font} from "../../themes/fonts";
import {styles} from "../../components/form-user-register/styles";
import PrimaryButton from "../../components/primary-button";
import { useState } from "react"


const MapProducer = ()=>{
    const [data,setData]=useState({domicilio:"",radio:""})

    const handleSubmit=()=>{
        if(data.domicilio !== "" && data.radio !== ""){
        console.log(data);
        return;
        }
        console.log("Debe completar los campos");
    }
    return<>
        <ImageBackground source={require("../../../assets/map.png")} style={{width:"100%",height:"100%"}}>
            <View style={{...style.image, position:"absolute", marginLeft:15.2, marginTop:78.33}}><Image source={require("../../../assets/vector-back-white.png")} /></View>
        <View style={{paddingHorizontal:14,paddingTop:116 }}>
            <View>
                <Text style={{...style.title,color:"rgba(242, 243, 245, 1)"}}>Ingresa tu ubicación</Text>
            </View>
            <TextInput onChangeText={(e)=>setData({...data,domicilio:e})} style={styles.textInput} placeholder="Ejemplo: Calle industriales, 50006"></TextInput>
        </View>
        <View style={style.vectorMap}>
            <Image style={style.circleMap} source={require("../../../assets/mapCircle.png")}></Image>
            <Image style={style.pointMap} source={require("../../../assets/pointMap0.png")}></Image>
        </View>
        <View style={{paddingHorizontal:14 }}>
            <View>
                <Text style={{...style.title,color:"rgba(242, 243, 245, 1)"}}>Radio de entrega</Text>
            </View>
            <TextInput onChangeText={(e)=>setData({...data,radio:e})} keyboardType="number-pad" placeholder="2                     km" style={{...styles.textInput,width:"50%", marginBottom:36}} ></TextInput>
            <PrimaryButton onPress={handleSubmit} title="Siguiente" vectorNext={true}></PrimaryButton>
        </View>
        </ImageBackground>
    </>
}

const style = StyleSheet.create({
    title:{
        fontSize: font.b1.size,
        fontWeight: font.b1.weight,
        fontFamily: font.inter.family
    },
    circleMap:{
        width:244,
        height:244,
        resizeMode:"contain",
    },
    pointMap:{
      height:75,
      resizeMode:"contain",
      position:"absolute",
      top:90,
      right:80
    },
    image:{
      width:17.34,
      height: 8.6
    },
    vectorMap:{
        alignItems:"flex-end",
        paddingTop:23,
        paddingBottom:18,
        paddingRight:14,
    }
})

export default MapProducer;