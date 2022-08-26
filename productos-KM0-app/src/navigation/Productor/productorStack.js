import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductorHome from "../../screens/ProductorHome";
import { colors } from "../../themes";
import { Dimensions } from "react-native";

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;
const ProductorStack = createBottomTabNavigator();


// PODUCTOR STACK
const ProductorStackNavigation = () => {
  return (
    <ProductorStack.Navigator initialRouteName="Home">
      <ProductorStack.Screen
        name="Home"
        component={ProductorHome}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              color={
                focused
                  ? colors.gradientGreen.primary
                  : colors.gradientOrange.primary
              }
              size={heightScreen * 0.05}
              style={{ marginTop: widthScreen * 0.01 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: heightScreen * 0.02,
          },
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: colors.gradientOrange.primary,
            height: heightScreen * 0.13,
            paddingBottom: heightScreen * 0.019,
          },
          tabBarActiveTintColor: colors.gradientGreen.primary,
          tabBarInactiveTintColor: colors.gradientOrange.primary,
        }}
      />
      <ProductorStack.Screen
        name="Productos"
        component={ProductorHome}
        options={{
          headerShown: false,
          tabBarLabel: "Productos",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-list"
              color={
                focused
                  ? colors.gradientGreen.primary
                  : colors.gradientOrange.primary
              }
              size={heightScreen * 0.05}
              style={{ marginTop: widthScreen * 0.01 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: heightScreen * 0.02,
          },
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: colors.gradientOrange.primary,
            height: heightScreen * 0.13,
            paddingBottom: heightScreen * 0.019,
          },
          tabBarActiveTintColor: colors.gradientGreen.primary,
          tabBarInactiveTintColor: colors.gradientOrange.primary,
        }}
      />
      <ProductorStack.Screen
        name="Chat"
        component={ProductorHome}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={
                focused
                  ? colors.gradientGreen.primary
                  : colors.gradientOrange.primary
              }
              size={heightScreen * 0.05}
              style={{ marginTop: widthScreen * 0.01 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: heightScreen * 0.02,
          },
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: colors.gradientOrange.primary,
            height: heightScreen * 0.13,
            paddingBottom: heightScreen * 0.019,
          },
          tabBarActiveTintColor: colors.gradientGreen.primary,
          tabBarInactiveTintColor: colors.gradientOrange.primary,
        }}
      />
      <ProductorStack.Screen
        name="Perfil"
        component={ProductorHome}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              color={
                focused
                  ? colors.gradientGreen.primary
                  : colors.gradientOrange.primary
              }
              size={heightScreen * 0.05}
              style={{ marginTop: widthScreen * 0.01 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: heightScreen * 0.02,
          },
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: colors.gradientOrange.primary,
            height: heightScreen * 0.13,
            paddingBottom: heightScreen * 0.019,
          },
          tabBarActiveTintColor: colors.gradientGreen.primary,
          tabBarInactiveTintColor: colors.gradientOrange.primary,
        }}
      />
    </ProductorStack.Navigator>
  );
};

export default ProductorStackNavigation;
