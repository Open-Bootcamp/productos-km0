import { Text, View, TouchableOpacity,Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../themes";

const PrimaryButton = ({ onPress, style, vectorNext = false, title = "Default value" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...style }}>
      <LinearGradient
        colors={[colors.gradientGreen.primary, colors.gradientGreen.secondary]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.buttonContainer}
      >
      <View style={{flexDirection:"row"}}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        {vectorNext && <View style={{justifyContent:"center", marginLeft:17}}>
          <Image source={require("../../../assets/vector-next.png")} />
        </View>}
      </View>
        
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
