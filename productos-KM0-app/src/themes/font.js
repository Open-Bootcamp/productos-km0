
import {  Dimensions } from "react-native";


const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

export const font = {
  h1: {
    fontSize: heightScreen * 0.03,
    fontWeight: "700",
  },
  h2:{
    fontSize: heightScreen * 0.021,
    fontWeight: "600",
  },
  h4:{
    fontSize: heightScreen * 0.01999,
    fontWeight: "500",
  },
  b1: {
    fontSize:heightScreen * 0.018,
    fontWeight: "500",
  },
  b2: {
    fontSize: heightScreen * 0.017,
    fontWeight: "500",
  },
};
