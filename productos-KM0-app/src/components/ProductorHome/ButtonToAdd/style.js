import { Dimensions, StyleSheet } from "react-native";

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;

const ButtonToAddStyle = StyleSheet.create({
    buttonToAdd: {
        position: "absolute",
        marginTop: heightScreen * 0.8,
        marginLeft: widthScreen * 0.78,
        zIndex: 4,
      },
      buttonToAdd2: {
        position: "absolute",
        marginTop: heightScreen * 0.8,
        marginLeft: widthScreen * 0.78,
        zIndex: 3,
      },
})


export default ButtonToAddStyle