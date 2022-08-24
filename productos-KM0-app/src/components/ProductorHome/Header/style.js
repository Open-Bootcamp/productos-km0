import { StyleSheet, Dimensions } from "react-native";
import { colors, font } from "../../../themes";

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

const HeaderProductorHomeStyle = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    height: heightScreen * 0.12,
  },
  textHeader: {
    marginTop: heightScreen * 0.05,
    marginStart: widthScreen * 0.073,
    color: colors.textPrimary,
    fontSize: font.h1.fontSize,
    fontWeight: font.h1.fontWeight,
  },
  notificationContain: {
    backgroundColor: colors.textPrimary,
    width: widthScreen * 0.10,
    height: heightScreen * 0.048,
    borderRadius: 100,
    marginStart: widthScreen * 0.62,
    marginTop: heightScreen * 0.03,
  },
  iconHeader: {
    marginStart: widthScreen * 0.02,
    marginTop:  heightScreen * 0.01,
  },
  iconNotification: {
    zIndex: 3,
    position: "absolute",
    bottom: widthScreen * 0.1,
    marginStart: widthScreen * 0.88,
  },
});

export default HeaderProductorHomeStyle;
