import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(()=>{
    const valor=Cookies.get("user")
    if (valor) {
      setIsLogged(true);
    }
  })

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};