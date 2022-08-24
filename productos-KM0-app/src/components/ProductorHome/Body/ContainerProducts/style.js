import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../../themes/colors";
import { font } from "../../../../themes/font";


const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;


const ContainerProductsStyle = StyleSheet.create({
  titleListProducts: {
    fontSize: font.h4.fontSize,
    fontWeight: font.h4.fontWeight,
    marginLeft:widthScreen * 0.065,
  },
  listProducts: {},
  productContain: {
    display: "flex",
    flexDirection: "row",
    marginTop: heightScreen * 0.013,
    paddingVertical: heightScreen * 0.008,
    borderBottomWidth: heightScreen * 0.003,
    borderColor: "#E3E3E7",
    marginHorizontal: widthScreen * 0.07,
  },
  image: {
    width: widthScreen * 0.15,
    height: heightScreen * 0.07,
    marginHorizontal: widthScreen * 0.02,
    marginBottom: heightScreen * 0.013,
    borderRadius: 100,
  },
  container1: { marginHorizontal: widthScreen * 0.02 },
  productName: {
    marginTop: heightScreen * 0.01,
    fontSize: font.h2.fontSize,
    fontWeight: font.h2.fontWeight,
  },
  productPriceText: {
    color: "#2F80ED",
    marginTop: heightScreen * 0.0088,
    fontSize: font.b2.fontSize,
    fontWeight: font.b2.fontWeight,
  },
  container2: { marginHorizontal:  widthScreen * 0.02 },
  pressable: {
    backgroundColor: colors.gradientOrange.primary,
    paddingHorizontal: widthScreen * 0.02,
    paddingVertical: heightScreen * 0.0034,
    marginTop: heightScreen * 0.0088,
    borderRadius: 10,
  },
  pressableText: { color: colors.textPrimary },
  productContainPriceNumber: {
    marginLeft: widthScreen * 0.06,
    marginTop: heightScreen * 0.006,
    fontSize: font.h4.fontSize,
    fontWeight: font.h4.fontWeight,
    color: "#4AD898",
  },
  productContainPriceNumberOff: {
    marginLeft: widthScreen * 0.06,
    marginTop: heightScreen * 0.006,
    fontSize: font.h4.fontSize,
    fontWeight: font.h4.fontWeight,
    color: colors.textError,
  },
});

export default ContainerProductsStyle;
