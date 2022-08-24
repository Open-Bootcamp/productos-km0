import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../themes";
import {font } from "../../themes/fonts"

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 7,
    backgroundColor: colors.inputFieldBackground,
    borderColor: "blue",
    fontSize : font.b1.size,
    fontWeight: font.b1.weight
  },
  button: {
    backgroundColor: "red",
  },
  error: {
    color: "red",
    fontSize : font.b2.size,
    fontWeight: font.b2.weight
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: "rgba(237, 58, 58, 1)",
  },
});
