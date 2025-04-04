import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

interface AuthorizationProviderProps {
  children: React.ReactNode;
}

interface AuthorizationContextProps {
  isAuthenticated: boolean;
  user: UserData | null;
  login: () => void;
  logout: () => void;
}

interface UserData {
  email: string;
  fullName: string;
  picture: string;
  googleId: string;
  password: string;
}

const AuthorizationContext = createContext<AuthorizationContextProps | null>(
  null
);

export const useAuthorization = () => {
  const context = useContext(AuthorizationContext);
  if (!context) {
    throw new Error(
      "useAuthorization must be used within an AuthorizationProvider"
    );
  }
  return context;
};

export const AuthorizationProvider = ({
  children,
}: AuthorizationProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    axios
      .get("https://readifyapp-backend.onrender.com/user", {
        withCredentials: true,
      })
      .then((response) => {
        setIsAuthenticated(true);
        setUser(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    // setUser(userData);
  };

  const logout = () => {
    axios
      .get("https://readifyapp-backend.onrender.com/logout", {
        withCredentials: true,
      })
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
