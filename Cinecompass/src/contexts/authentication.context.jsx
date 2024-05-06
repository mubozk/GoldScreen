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

  useEffect(() => {
    console.log("Setting up auth state change listener");
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      console.log("Auth state changed:", usr);
      if (usr) {
        AsyncStorage.setItem("user", JSON.stringify(usr))
          .then(() => {
            setUser(usr);
            console.log("User saved to AsyncStorage and set in state");
          })
          .catch((e) =>
            console.error("Failed to save user to AsyncStorage:", e)
          );
      } else {
        if (user) {
          console.log(
            "User auth state null but user still set, keeping user until explicit logout"
          );
        } else {
          console.log("No user in auth state and state, setting user to null");
          setUser(null);
          AsyncStorage.removeItem("user")
            .then(() =>
              console.log("User removed from AsyncStorage due to no auth state")
            )
            .catch((e) =>
              console.error("Failed to remove user from AsyncStorage:", e)
            );
        }
      }
    });

    return () => {
      console.log("Cleaning up auth listener");
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    console.log("Attempting to retrieve user from AsyncStorage");
    const getUser = async () => {
      setIsLoading(true);
      try {
        const userAsString = await AsyncStorage.getItem("user");
        if (userAsString) {
          const parsedUser = JSON.parse(userAsString);
          setUser(parsedUser);
          console.log(
            "User retrieved and parsed from AsyncStorage:",
            parsedUser
          );
        } else {
          console.log("No user found in AsyncStorage");
        }
      } catch (e) {
        console.error("Error parsing user data from AsyncStorage:", e);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  const onLogin = async (email, password) => {
    console.log("Login requested for email:", email);
    setIsLoading(true);
    try {
      const u = await loginRequest(auth, email, password);
      setUser(u);
      console.log("Login successful:", u);
      await AsyncStorage.setItem("user", JSON.stringify(u));
      console.log("User saved to AsyncStorage after login");
    } catch (e) {
      setError(e.toString());
      console.error("Error in onLogin:", e);
    }
    setIsLoading(false);
  };

  const onRegister = async (email, password, repeatedPassword) => {
    console.log("Register requested for email:", email);
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      console.log("Passwords do not match");
      setIsLoading(false);
      return;
    }
    try {
      const u = await createUserWithEmailAndPassword(auth, email, password);
      setUser(u);
      console.log("Registration successful:", u);
      await AsyncStorage.setItem("user", JSON.stringify(u));
      console.log("User saved to AsyncStorage after registration");
    } catch (e) {
      setError(e.toString());
      console.error("Error in onRegister:", e);
    }
    setIsLoading(false);
  };

  const onLogout = () => {
    console.log("Logout requested");
    signOut(auth)
      .then(() => {
        setUser(null);
        setError(null);
        console.log("Logout successful, user set to null");
      })
      .catch((e) => {
        setError(e.toString());
        console.error("Error during logout:", e);
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
