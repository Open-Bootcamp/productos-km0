import { StyleSheet } from "react-native";
import { colors, font } from "../../themes";
export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    ...font.b1,
    fontFamily: "Inter-Medium",
    color: colors.textPrimary,
  },
});
