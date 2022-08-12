import { useFonts } from "expo-font";

import { ActivityIndicator, StyleSheet, View } from "react-native";
import { PrimaryButton, CustomInput } from "./src/components";
import { AntDesign } from "@expo/vector-icons";
import MainNavigator from "./src/navigation/main";

export default function App() {
  const [loaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }
  const leftIcon = <AntDesign name="stepforward" size={24} color="black" />;
  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
