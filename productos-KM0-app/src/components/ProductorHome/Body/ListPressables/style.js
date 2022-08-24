import { StyleSheet, Dimensions } from "react-native";
import { font } from "../../../../themes";
import { colors } from "../../../../themes/colors";


const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;


const ListPressablesStyle = StyleSheet.create({
  listButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-evenly',
    marginVertical: heightScreen * 0.02,
 
  },
  pressable: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.gradientGreen.primary,
    height: heightScreen * 0.09,
    borderRadius: 10,
    width: widthScreen * 0.4,
    paddingLeft: widthScreen * 0.01,
    paddingTop: heightScreen * 0.02,
  },
  textPressable: {
    fontSize: font.b1.fontSize,
    fontWeight: font.b1.fontWeight,
    color: colors.textPrimary,
    maxWidth: widthScreen * 0.2,
    marginLeft: widthScreen * 0.019,
  },
  iconPressable: {
   marginStart: widthScreen * 0.018,
    marginRight: widthScreen * 0.01,
  },
});

export default ListPressablesStyle;
