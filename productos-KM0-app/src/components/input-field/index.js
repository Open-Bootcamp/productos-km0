import React from "react";
import { TextInput, View, Text } from "react-native";

import { styles } from "./styles";

const CustomInput = ({
  placeholder = "Default placeholder",
  keyboardType = "default",
  style,
  label,
}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={{ ...styles.input, ...style }}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;
