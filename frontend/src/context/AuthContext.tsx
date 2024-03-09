import { createContext, useContext, useState } from "react";

const AuthorizationContext = createContext();

export const useAuthorization = () => {
  return useContext(AuthorizationContext);
};

export const AuthorizationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
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
