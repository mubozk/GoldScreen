import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/contexts/app.context";
import GlobalLoading from "./GlobalLoading";
import { FavouritesProvider } from "./src/contexts/favourites.context";
import { firebaseConfig } from "./src/constants/config";
import Navigator from "./src/navigation";

initializeApp(firebaseConfig);

const App = () => (
  <AuthenticationContextProvider>
    <AppProvider>
      <FavouritesProvider>
        <Navigator />
        <GlobalLoading />
      </FavouritesProvider>
    </AppProvider>
  </AuthenticationContextProvider>
);

export default App;
