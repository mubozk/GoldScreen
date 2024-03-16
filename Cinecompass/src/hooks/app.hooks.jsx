import { useContext } from "react";
import { AppContext, AppContextDispatch } from "../contexts/app.context";
import colors from "../constants/colors";
const useAppHooks = () => {
  const { appState } = useContext(AppContext);
  const { appDispatch } = useContext(AppContextDispatch);

  const themePalette =
    appState.theme === "dark" ? colors.dark_theme : colors.light_theme;

  const toggleLoading = () => {
    appDispatch({ type: "TOGGLE_LOADING" });
  };
  const toggleTheme = () => {
    appDispatch({ type: "TOGGLE_THEME" });
  };
  const stopLoading = () => {
    appDispatch({ type: "STOP_LOADING" });
  };

  return {
    themePalette,
    isLoading: appState.loading,
    stopLoading,
    toggleLoading,
    toggleTheme,
  };
};
export default useAppHooks;
