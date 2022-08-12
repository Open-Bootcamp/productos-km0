import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

const CustomInput = (
  {
    placeholder = "Default placeholder",
    keyboardType = "default",
    style,
    leftIcon,
  },
  props
) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

export default CustomInput;
