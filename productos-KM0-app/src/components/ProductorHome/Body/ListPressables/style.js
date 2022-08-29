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
    //backgroundColor:colors.textPrimary
    backgroundColor: '#fff'
  },
  pressable: {
    display: "flex",
    flexDirection: "row",
    //backgroundColor: colors.gradientGreen.primary,
    backgroundColor: '#FF8F15',
    height: heightScreen * 0.094,
    borderRadius: 10,
    width: widthScreen * 0.45,
    paddingLeft: widthScreen * 0.01,
    paddingTop: heightScreen * 0.02,
  },
  textsContain:{
   alignContent:'center'
  },
  textPressable: {
    //fontSize: font.b1.fontSize,
    fontSize: 18,
    //fontWeight: font.b1.fontWeight,
    fontWeight: '500',
    //color: colors.textPrimary,
   color: '#FFFFFF'
   
  },
  iconPressable: {
   marginStart: widthScreen * 0.018,
    marginRight: widthScreen * 0.024,
  },
});

export default ListPressablesStyle;
