import { View, Text, Pressable,Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListPressablesStyle from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../../themes";


const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;


const ListPressables = (props) => {
  const Style = ListPressablesStyle;

  return (
    <>
      <View style={Style.listButtons}>
        <Pressable>
          <LinearGradient
            colors={[
              colors.gradientGreen.primary,
              colors.gradientGreen.secondary,
            ]}
            start={[0, 0]}
            end={[1, 1]}
            style={Style.pressable}
          >
            <Ionicons
              name="ios-calendar-sharp"
              size={heightScreen * 0.052}
              color={colors.textPrimary}
              style={Style.iconPressable}
            />
           <View  style={Style.textsContain}>
            <Text style={Style.textPressable}>Calendario</Text>
            <Text style={Style.textPressable}>de entregas</Text>
            </View>
          </LinearGradient>
        </Pressable>

        <Pressable>
          <LinearGradient
            colors={[
              colors.gradientGreen.primary,
              colors.gradientGreen.secondary,
            ]}
            start={[0, 0]}
            end={[1, 1]}
            style={Style.pressable}
          >
            <Ionicons
              name="md-star-outline"
              size={heightScreen * 0.052}
              color={colors.textPrimary}
              style={Style.iconPressable}
            />
            <View  style={Style.textsContain}>
            <Text style={Style.textPressable}>Mis</Text>
            <Text style={Style.textPressable}>reviews</Text>
          </View>
          </LinearGradient>
        </Pressable>
      </View>
    </>
  );
};
export default ListPressables;
