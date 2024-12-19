import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthResult } from '../Component/login/AuthResult';
import { loginUserDetails } from '../Component/login/AuthResult';
import api from '../api';
import { loginAPi, logoutApi } from '../Service Proxey/loginAppservice';
interface AuthContextType {
  isAuthenticated: boolean;
  loginUserDetails: loginUserDetails | null;
  login: (userId: string, password: string, tenantId: number) => Promise<{ error: string | undefined | null, isvalidate: boolean | undefined | null }>;
  logout: () => void;
  getTenant: () => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // const navigate = useNavigate();
  const [loginUserDetails, setloginUserDetails] = useState<loginUserDetails | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && validateToken(token)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      // navigate('/login');
    }
  }, []);


  const getTenant = () => {
    const hostname = window.location.hostname; // This will be like 'abc.localhost' or 'localhost'
    const parts = hostname.split('.');
    // If there is a subdomain, return it. Otherwise, return null or empty string.
    return parts.length >= 2 ? parts[0] : '';  // If there's a subdomain like 'abc.localhost', return 'abc'
};



  const validateToken = (token: string): boolean => {
    // Add your token validation logic here
    // For example, check if the token is expired
    // Return true if valid, false otherwise
    return true; // Placeholder, replace with actual validation
  };

  const login = async (userId: string, password: string, tenantId: number): Promise<{ error: string | undefined | null, isvalidate: boolean | undefined | null }> => {
    try {
      const response = await loginAPi(userId, password, tenantId);
      if (response?.result.isError) {
        console.error('Error: ', response.errorMessage);
        return { error: response.errorMessage, isvalidate: false };
      }
      else {
        localStorage.setItem('token', response?.result.accessToken?.toString() || '');
        setIsAuthenticated(true);
        return { error: '', isvalidate: true };
      }
    } catch (error) {
      console.error('Error: ', error);
      return { error: (error as Error).message, isvalidate: false };
    }
  };

  const logout = async () => {
   
      localStorage.removeItem('token');
      setloginUserDetails(null);
      setIsAuthenticated(false);

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUserDetails, login, logout ,getTenant}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};