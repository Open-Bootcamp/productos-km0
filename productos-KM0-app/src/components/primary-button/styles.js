import { StyleSheet } from "react-native";
import { colors } from "../../themes";
import { font } from "../../themes/fonts"
export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontSize : font.b1.size,
    fontWeight: font.b1.weight,
    fontFamily: "Inter-Medium",
    color: colors.textPrimary,
  },
});
