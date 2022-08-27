import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductorHome from "../../screens/ProductorHome";
import PerfilProductor from "../../screens/ProductorHome/PerfilProductor";
import ProductosProductor from "../../screens/ProductorHome/ProductosProductor";
import ChatProductor from "../../screens/ProductorHome/ChatProductor";
import { Dimensions } from "react-native";

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;
const ProductorStack = createBottomTabNavigator();

// PODUCTOR STACK
const ProductorStackNavigation = () => {
  return (
    <ProductorStack.Navigator 
      initialRouteName="Home"
      
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00A887',
        tabBarInactiveTintColor: '#FF8F15',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 90
        },
        tabBarLabelStyle: {
          fontSize: 18,
          marginBottom: 10,
          fontWeight: '500',
          fontFamily: 'Inter'
        }
      }}

    >
      <ProductorStack.Screen
        name="Home"
        component={ProductorHome}
        options={{
          //headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-home"
              color={color}
              size={35}
            />
          ),
        }}
      />
      <ProductorStack.Screen
        name="Productos"
        component={ProductosProductor}
        options={{
          tabBarLabel: "Productos",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-list"
              color={color}
              size={35}
            />
          ),
        }}
      />
      <ProductorStack.Screen
        name="Chat"
        component={ChatProductor}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={35}
            />
          ),
        }}
      />
      <ProductorStack.Screen
        name="Perfil"
        component={PerfilProductor}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-outline"
              color={color}
              size={35}
            />
          ),
        }}
      />
    </ProductorStack.Navigator>
  );
};

export default ProductorStackNavigation;
