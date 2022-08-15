import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CompradorRegister from "../screens/registro-comprador";
import { ProductorRegister } from "../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Productor" component={CompradorRegister} />
        {/*  <Stack.Screen name="Comprador" component={CompradorRegister} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
