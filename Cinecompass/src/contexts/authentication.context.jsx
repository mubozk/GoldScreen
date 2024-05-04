import React, { useState, createContext, useRef, useEffect } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { loginRequest } from "../services/authentication.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      const userAsString = await AsyncStorage.getItem("user");
      if (userAsString) {
        try {
          setUser(JSON.parse(userAsString));
        } catch (e) {
          console.error("Error parsing user data:", e);
        }
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  const onLogin = async (email, password) => {
    setIsLoading(true);

    try {
      const u = await loginRequest(auth, email, password);
      setUser(u);
      await AsyncStorage.setItem("user", JSON.stringify(u));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
      console.error("Error in onLogin:", e);
    }
  };
  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
