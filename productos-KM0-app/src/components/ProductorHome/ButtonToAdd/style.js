import { Dimensions, StyleSheet } from "react-native";

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

const ButtonToAddStyle = StyleSheet.create({
    buttonToAdd: {
        position: "absolute",
        marginTop: heightScreen * 0.73,
        marginLeft: widthScreen * 0.78,
        zIndex: 4,
      },
      buttonToAdd2: {
        position: "absolute",
        marginTop: heightScreen * 0.73,
        marginLeft: widthScreen * 0.78,
        zIndex: 3,
      },
})


export default ButtonToAddStyle