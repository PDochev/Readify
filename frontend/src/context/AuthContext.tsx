import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthorizationContext = createContext();

export const useAuthorization = () => {
  return useContext(AuthorizationContext);
};

export const AuthorizationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((response) => {
        setIsAuthenticated(true);
        setUser(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    axios
      .get("http://localhost:3000/logout", { withCredentials: true })
      .then(() => {
        setIsAuthenticated(false);
        setUser(null);
        toast({ title: "You have been logged out." });
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <AuthorizationContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
