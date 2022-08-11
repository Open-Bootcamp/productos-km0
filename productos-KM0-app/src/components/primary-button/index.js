import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../themes";

const PrimaryButton = ({ onPress, style, title = "Default value" }) => {
  return (
    <TouchableOpacity style={{ ...style }}>
      <LinearGradient
        colors={[colors.gradientGreen.primary, colors.gradientGreen.secondary]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.buttonContainer}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
