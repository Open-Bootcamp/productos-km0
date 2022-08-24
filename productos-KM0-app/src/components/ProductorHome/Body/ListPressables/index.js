import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListPressablesStyle from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../../themes";

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
              size={35}
              color={colors.textPrimary}
              style={Style.iconPressable}
            />
            <Text style={Style.textPressable}>Calendario de entregas</Text>
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
              size={35}
              color={colors.textPrimary}
              style={Style.iconPressable}
            />
            <Text style={Style.textPressable}>Mis    reviews</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </>
  );
};
export default ListPressables;
