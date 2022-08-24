import { Pressable, View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FooterProductorHomeStyle from "./style";
import { colors } from "../../../themes/colors";
import { useEffect, useState } from "react";



const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

const FooterProductorHome = (props) => {
  const { notification } = props;
  const [chatMessage, setChatMessage] = useState(false);
  const Style = FooterProductorHomeStyle;

  useEffect(() => {
    if (notification.type === "chat") {
      setChatMessage(true)
    }else{
      setChatMessage(false)
    }
  }, [notification]);

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
      <View style={Style.footer}>
        <Pressable style={Style.button}>
          <Ionicons
            name="ios-home"
            size={heightScreen * 0.045}
            color={colors.gradientGreen.primary}
          />
          <Text style={Style.text2}>inicio</Text>
        </Pressable>
        <Pressable style={Style.button}>
          <Ionicons
            name="ios-list"
            size={heightScreen * 0.045}
            color={colors.gradientOrange.primary}
            style={Style.iconProducts}
          />

          <Text style={Style.text}>productos</Text>
        </Pressable>
        <Pressable style={Style.button}>
          {chatMessage ? (
            <Ionicons
              name="ellipse"
              size={heightScreen * 0.02}
              color={colors.textError}
              style={Style.iconNotification}
            />
          ) : (
            <></>
          )}

          <Ionicons
            name="chatbox-ellipses-outline"
            size={heightScreen * 0.045}
            color={colors.gradientOrange.primary}
          />

          <Text style={Style.text}>chat</Text>
        </Pressable>
        <Pressable style={Style.button}>
          <Ionicons
            name="person-outline"
            size={heightScreen * 0.045}
            color={colors.gradientOrange.primary}
          />

          <Text style={Style.text}>perfil</Text>
        </Pressable>
      </View>
    </>
  );
};
export default FooterProductorHome;
