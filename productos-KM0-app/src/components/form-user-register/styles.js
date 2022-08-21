import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../themes";
import { font } from "../../themes";

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 7,
    backgroundColor: colors.inputFieldBackground,
    borderColor: "blue",
    ...font.b1,
  },
  button: {
    backgroundColor: "red",
  },
  error: {
    color: "red",
    ...font.b2,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: "rgba(237, 58, 58, 1)",
  },
});
