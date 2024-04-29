import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import ScreensNavigator from "./screens.navigator";
import AccountNavigator from "./account.navigator";
import { AuthenticationContext } from "../contexts/authentication.context";

const Navigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <ScreensNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
export default Navigator;
