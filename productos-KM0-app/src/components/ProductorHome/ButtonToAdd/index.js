import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonToAddStyle from "./style";
import { colors } from "../../../themes";

const heightScreen = Dimensions.get("screen").height;


const ButtonToAdd = (porps) => {
    const Style =ButtonToAddStyle
  return (
    <>
      <Ionicons
        name="ios-add-circle-sharp"
        size={heightScreen * 0.09}
        color={colors.gradientOrange.primary}
        style={Style.buttonToAdd}
      />
      <Ionicons
        name="ellipse"
        size={heightScreen * 0.09}
        color={colors.textPrimary}
        style={Style.buttonToAdd2}
      />
    </>
  );
};

export default ButtonToAdd;
