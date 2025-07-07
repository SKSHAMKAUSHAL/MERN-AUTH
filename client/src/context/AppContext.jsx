import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const getAuthState = async () => {
    try {
      console.log("AppContext: Checking auth state");
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth", {
        withCredentials: true,
      });
      if (data.success) {
        setIsLoggedIn(true);
        await getUserData();
      }
    } catch (error) {
      console.error("AppContext: Auth state error:", error.message);
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    try {
      console.log("AppContext: Fetching user data");
      const { data } = await axios.get(backendUrl + "/api/user/data", {
        withCredentials: true,
      });
      if (data.success) {
        setUserData(data.userData);
        console.log("AppContext: User data set:", data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("AppContext: Get user data error:", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
    getAuthState,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};