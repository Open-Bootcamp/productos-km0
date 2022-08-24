import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../themes/colors";
import { font } from "../../../themes/font";

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

const FooterProductorHomeStyle = StyleSheet.create({
  buttonToAdd: {
    position: "absolute",
    top: heightScreen * 0.75,
    left: widthScreen * 0.78,
    zIndex: 2,
  },
  buttonToAdd2: {
    position: "absolute",
    top: heightScreen * 0.75,
    left: widthScreen * 0.78,
    zIndex: 1,
  },
  footer: {
    borderWidth: 1,
    borderColor: colors.gradientOrange.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: heightScreen * 0.02,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    marginEnd: widthScreen * 0.01,
    marginVertical: heightScreen * 0.029,
  },
  iconProducts: { marginStart: widthScreen * 0.048 },

  text: {
    color: colors.gradientOrange.primary,
    fontSize: font.h4.fontSize,
    fontWeight: font.h4.fontWeight,
    textTransform: "capitalize",
    marginStart: widthScreen * 0.01,
  },
  text2: {
    color: colors.gradientGreen.primary,
    fontSize: font.h4.fontSize,
    fontWeight: font.h4.fontWeight,
    textTransform: "capitalize",
    marginStart: widthScreen * 0.01,
  },
  iconNotification: {
    zIndex: 3,
    position: "absolute",
    marginLeft: widthScreen * 0.06,
    bottom: widthScreen * 0.126,
  },
});

export default FooterProductorHomeStyle;
