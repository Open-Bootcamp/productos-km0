import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { font } from "../../themes/fonts";

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

const HomeScrenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
  },
  containerTexts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: heightScreen * 0.1,
    marginHorizontal: widthScreen * 0.09,
  },
  titlePrimary: {
    fontSize: font.h1.size,
    fontWeight: font.h1.weight,
    fontFamily: font.inter.family,
  },
  titleSecondary: {
    fontSize: 30,
    fontWeight: font.h1.weight,
    color: colors.gradientGreen.secondary,
    fontFamily: font.poppins.family,
  },
  inputText1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: heightScreen * 0.002,
    paddingLeft: widthScreen * 0.15,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.1,
    paddingHorizontal: widthScreen * 0.1,
    backgroundColor: "#D4DDEA",
    borderRadius: 20,
    height: heightScreen * 0.06,
    color: colors.textSecondary,
    fontFamily: font.inter.family,
    fontSize: font.b1.size,
    fontWeight: font.b1.weight,
  },
  inputText1Error: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: heightScreen * 0.002,
    paddingLeft: widthScreen * 0.15,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.1,
    paddingHorizontal: widthScreen * 0.1,
    backgroundColor: "#D4DDEA",
    borderRadius: 20,
    height: heightScreen * 0.06,
    borderWidth: 1.5,
    borderColor: colors.textError,
    color: colors.textSecondary,
    fontFamily: font.inter.family,
    fontSize: font.b1.size,
    fontWeight: font.b1.weight,
  },
  errorPassword: {
    fontFamily: font.inter.family,
    fontSize: font.b2.size,
    fontWeight: font.b2.weight,
    color: colors.textError,
    marginLeft: widthScreen * 0.12,
    marginTop: heightScreen * 0.01,
    maxWidth: 300,
  },
  iconEye: {
    position: "absolute",
    top: heightScreen * 0.37,
    right: widthScreen * 0.14,
    zIndex: 2,
    color: "rgba(19, 18, 18, 0.6)",
  },
  iconKey: {
    position: "absolute",
    top: heightScreen * 0.37,
    right: widthScreen * 0.8,
    zIndex: 2,
    color: "rgba(19, 18, 18, 0.6)",
  },

  inputText2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: heightScreen * 0.002,
    paddingLeft: widthScreen * 0.15,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.02,
    paddingHorizontal: widthScreen * 0.1,
    backgroundColor: "#D4DDEA",
    borderRadius: 20,
    height: heightScreen * 0.06,
    color: colors.textSecondary,
    fontFamily: font.inter.family,
    fontSize: font.b1.size,
    fontWeight: font.b1.weight,
  },
  inputText2Error: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: heightScreen * 0.002,
    paddingLeft: widthScreen * 0.15,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.01,
    paddingHorizontal: widthScreen * 0.1,
    backgroundColor: "#D4DDEA",
    borderRadius: 20,
    height: heightScreen * 0.06,
    borderWidth: 1.5,
    borderColor: colors.textError,
    color: colors.textSecondary,
    fontFamily: font.inter.family,
    fontSize: font.b1.size,
    fontWeight: font.b1.weight,
  },

  buttonSubmit: {
    width: widthScreen * 0.8,
    height: heightScreen * 0.07,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.03,
    backgroundColor: colors.gradientGreen.primary,
    borderRadius: 20,
    alignItems: "center",
  },
  textButtonSubmit: {
    marginTop: heightScreen * 0.02,
    fontStyle: "normal",
    fontWeight: font.b1.weight,
    fontSize: 16,
    lineHeight: 19,
    color: colors.screenBackground,
  },
  textToRestorePassword: {
    color: colors.gradientOrange.primary,
    marginTop: heightScreen * 0.03,
    marginLeft: widthScreen * 0.31,
    fontFamily: font.s1.family,
    fontStyle: font.s1.style,
    fontWeight: font.s1.weight,
    fontSize: font.s1.size,
  },
  containLines: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: heightScreen * 0.04,
  },
  line1: {
    marginTop: heightScreen * 0.012,
    width: widthScreen * 0.37,
    height: 0,
    borderColor: "#A6B1C2",
    borderWidth: 1,
  },
  line2: {
    marginTop: heightScreen * 0.012,
    width: widthScreen * 0.35,
    height: 0,
    borderColor: "#A6B1C2",
    borderWidth: 1,
  },
  point: {
    marginBottom: heightScreen * 0.01,
    marginHorizontal: -(widthScreen * 0.08),
    fontFamily: font.inter.family,
    fontStyle: "normal",
    fontWeight: font.b1.weight,
    fontSize: 13,
    alignItems: "center",
    color: "#A6B1C2",
  },
  buttonGoogle: {
    width: widthScreen * 0.8,
    height: heightScreen * 0.07,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.014,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.inputFieldBackground,
    borderRadius: 20,
  },
  iconGoogle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginTop: heightScreen * 0.022,
    marginEnd: widthScreen * 0.023,
  },
  textButtonGoogle: {
    marginTop: heightScreen * 0.022,
    fontSize: 16,
    lineHeight: 19,
    color: colors.textSecondary,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: font.h2.weight,
    fontSize: 14,
  },
  buttonToRegister: {
    width: widthScreen * 0.8,
    height: heightScreen * 0.07,
    marginHorizontal: widthScreen * 0.1,
    marginTop: heightScreen * 0.04,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: colors.gradientOrange.primary,
  },
  textButtonRegister: {
    marginTop: heightScreen * 0.02,
    fontStyle: "normal",
    fontWeight: font.b1.weight,
    fontSize: 16,
    lineHeight: 19,
    color: colors.screenBackground,
  },
});

export default HomeScrenStyle;
