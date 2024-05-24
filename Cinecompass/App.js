import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/contexts/authentication.context";
import { AppProvider } from "./src/contexts/app.context";
import GlobalLoading from "./GlobalLoading";
import { firebaseConfig } from "./src/constants/config";
import Navigator from "./src/navigation";

initializeApp(firebaseConfig);

const App = () => (
  <AuthenticationContextProvider>
    <AppProvider>
      <Navigator />
      <GlobalLoading />
    </AppProvider>
  </AuthenticationContextProvider>
);

export default App;
