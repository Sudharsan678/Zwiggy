//importing libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigators/RootNavigator";

export const App = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

