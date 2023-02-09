import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens/Login";
import { Home } from "../Screens/Home";
import { SignUp } from "../Screens/SignUp";
import type {RouteProp} from '@react-navigation/native';

export type AppStackParamList = {
    Login: undefined;
    // 'Login' : undefined;
    SignUp: undefined;
    Home: undefined;
  };

export const MainStack = () => {

    const Stack = createNativeStackNavigator<AppStackParamList>();
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};