import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/account/account.screen";
import LoginScreen from "../screens/account/login.screen";
import RegisterScreen from "../screens/account/register.screen";
const AccountStack = createStackNavigator();

const AccountNavigator = () => (
  <AccountStack.Navigator headerMode="none">
    <AccountStack.Screen name="Main" component={AccountScreen} />
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Register" component={RegisterScreen} />
  </AccountStack.Navigator>
);
export default AccountNavigator;
