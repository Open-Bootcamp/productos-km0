import React from "react";
import {Text, StyleSheet,View, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import { colors } from "../../themes";
import {font} from "../../themes/fonts";
import { LinearGradient } from "expo-linear-gradient";


const ButtonAskProducer = ({booleanValue, textButton , onPressAction})=>{
    
return <>
<TouchableWithoutFeedback onPress={onPressAction} >
    {booleanValue ? <LinearGradient
        colors={[colors.gradientOrange.primary, colors.gradientOrange.secondary]}
        start={[0, 0]}
        end={[1, 1]}
        style={style.button}
      >
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Text style={{...style.text, color: "#F2F3F5"}}>{textButton}</Text>
                    </View>
                </View>
               </LinearGradient> : <View style={{...style.button, backgroundColor: colors.inputFieldBackground}} >
                <Text style={{...style.text, color: "rgba(19, 18, 18, 0.6)"}}>{textButton}</Text>
                </View>}
</TouchableWithoutFeedback>
</>
}

const style = StyleSheet.create({
    button:{
        justifyContent: "center",
        alignItems: "center",
        width:68,
        height:51,
        borderRadius: 20,
        marginRight:20,
    },
    text:{
        fontSize: font.h2.size,
        fontFamily: font.inter.family,
        fontWeight: font.h2.weight,
        alignSelf:"center",
    }
})

export default ButtonAskProducer;

