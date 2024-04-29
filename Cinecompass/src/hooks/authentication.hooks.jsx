import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { loginRequest } from "./authentication.service";

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  const auth = getAuth();

  const onLogin = (email, password) => {
    dispatch({ type: "TOGGLE_LOADING" });
    loginRequest(auth, email, password)
      .then((u) => {
        dispatch({ type: "SET_USER", payload: u });
        dispatch({ type: "STOP_LOADING" });
      })
      .catch((e) => {
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "SET_ERROR", payload: e.toString() });
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    dispatch({ type: "TOGGLE_LOADING" });
    if (password !== repeatedPassword) {
      dispatch({ type: "SET_ERROR", payload: "Error: Passwords do not match" });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        dispatch({ type: "SET_USER", payload: u });
        dispatch({ type: "STOP_LOADING" });
      })
      .catch((e) => {
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "SET_ERROR", payload: e.toString() });
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      dispatch({ type: "SET_USER", payload: null });
      dispatch({ type: "SET_ERROR", payload: null });
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usr) => {
      dispatch({ type: "SET_USER", payload: usr });
      dispatch({ type: "STOP_LOADING" });
    });
    return unsubscribe;
  }, []);

  return { ...state, onLogin, onRegister, onLogout };
};

export default useAuth;
