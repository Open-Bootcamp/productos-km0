import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductorRegister } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductorRegister" component={ProductorRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
