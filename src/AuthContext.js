
import React, { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // localStorage.setItem('key', '777');
  useEffect(() => {
    const value = localStorage.getItem('key');
    console.log(value)
  }, [])

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);