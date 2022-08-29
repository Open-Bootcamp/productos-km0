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
    justifyContent:'space-between',
    height: heightScreen * 0.12,
    paddingHorizontal:widthScreen * 0.06
  
  },
  textHeader: {
    marginTop: heightScreen * 0.05,
  
    //color: colors.textPrimary,
    color: '#fff',
    //fontSize: font.h1.fontSize,
    fontSize: 25,
    fontWeight: '700'
    //fontWeight: font.h1.fontWeight,
  },
  notificationContain: {
    //backgroundColor: colors.textPrimary,
    backgroundColor: '#fff',
    width: heightScreen * 0.048,
    height: heightScreen * 0.048,
    borderRadius: 100,
    marginTop:heightScreen * 0.03
  },
  iconHeader: {
    marginStart: widthScreen * 0.022,
    marginTop:  heightScreen * 0.019,
   
  },
  iconNotification: {
    zIndex: 3,
    marginTop: - heightScreen * 0.007,
  marginBottom: - heightScreen * 0.027,
  marginStart:widthScreen * 0.052
  
  
  },
});

export default HeaderProductorHomeStyle;
