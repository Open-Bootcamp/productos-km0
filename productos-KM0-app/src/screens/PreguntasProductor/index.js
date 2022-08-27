import React from "react";
import { useState, useEffect } from "react"
import {Text, TextInput, Image, StyleSheet,View, TouchableHighlight} from "react-native";
import {styles} from "../../components/form-user-register/styles";
import PrimaryButton from "../../components/primary-button";
import {font} from "../../themes/fonts";
import { colors } from "../../themes";


const AskProducer = ()=>{
const [color1 , setColor1 ] = useState(false)
const [color2, setColor2 ] = useState(false)
const [color3 , setColor3 ] = useState(false)
const [color4, setColor4 ] = useState(false)
const [objAux, setObjAux] = useState({reparto:"",entrega : ""});

const changeColor = ()=>{
    if(!color1){
    setColor1(!color1)
    setColor2(false)
    let valor = !color1
    setObjAux({...objAux,reparto:valor})
    }
}

const changeColor2 = ()=>{
    if(!color2){
    setColor2(!color2)
    setColor1(false)
    let valor = color2
    setObjAux({...objAux,reparto:valor})
    }
}

const changeColor3 = ()=>{
    if(!color3){
    setColor3(!color3)
    setColor4(false)
    let valor = !color3
    setObjAux({...objAux,entrega:valor})
    }
}

const changeColor4 = ()=>{
    if(!color4){
    setColor4(!color4)
    setColor3(false)
    let valor = color4
    setObjAux({...objAux,entrega:valor})
    }
} 

const handleSubmit =()=>{
    if(objAux.entrega === "" || objAux.reparto === ""){
        console.log("Debe completar las preguntas para continuar");
        return;
    }
    console.log("Datos enviados !");
    console.log(objAux);
}



return <>
    <View style={{...style.image, position:"absolute", marginLeft:15.2, marginTop:78.33}}><Image source={require("../../../assets/vector-back.png")} /></View>
    <View style={{paddingHorizontal:14,paddingTop:116 }}>
        <View >
            <Text style={style.title}>Nombre de la granja (opcional)</Text>
        </View>
        <TextInput style={styles.textInput} placeholder="Ejemplo: Los Nogales"></TextInput>
        <View >
            <Text style={style.title}>¿Haces reparto a domicilio?</Text>
        </View>

        <View style={{flexDirection:"row"}}>
            <TouchableHighlight style={{...style.button,backgroundColor:!color1 ? colors.inputFieldBackground : colors.gradientOrange.primary}} onPress={changeColor} ><View style={style.button} ><Text>Si</Text></View></TouchableHighlight>

            <TouchableHighlight style={{...style.button,backgroundColor:!color2 ? colors.inputFieldBackground : colors.gradientOrange.primary}} onPress={changeColor2} ><View style={style.button} ><Text>No</Text></View></TouchableHighlight>
        </View>
        
        <View >
            <Text style={style.title}>¿Entregas en un punto en concreto?</Text>
        </View>

        <View style={{flexDirection:"row"}}>
            <TouchableHighlight style={{...style.button,backgroundColor:!color3 ? colors.inputFieldBackground : colors.gradientOrange.primary}} onPress={changeColor3} ><View style={style.button} ><Text>Si</Text></View></TouchableHighlight>

            <TouchableHighlight style={{...style.button,backgroundColor:!color4 ? colors.inputFieldBackground : colors.gradientOrange.primary}} onPress={changeColor4} ><View style={style.button} ><Text>No</Text></View></TouchableHighlight>
        </View> 

        

        <PrimaryButton onPress={handleSubmit}></PrimaryButton>

    </View>
</>
}

const style = StyleSheet.create({
    button:{
        width:100,
        height:100,
    },
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
export default AskProducer;
