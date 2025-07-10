import React, { createContext, useContext, useState, useEffect } from "react";

// Create context with default undefined
const AuthContext = createContext(undefined);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    }
    setIsLoading(false);
  }, []);

  // Login function (mock)
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "test@ayurveda.com" && password === "password123") {
        const mockUser = {
          id: "1",
          email,
          name: "Test User",
          avatar: "/placeholder.svg",
        };
        const mockToken = "mock-jwt-token-" + Date.now();

        localStorage.setItem("authToken", mockToken);
        localStorage.setItem("userData", JSON.stringify(mockUser));
        setUser(mockUser);

        return { success: true };
      } else {
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      return { success: false, error: "An error occurred during login" };
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function (mock)
  const signup = async (name, email, password) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        avatar: "/placeholder.svg",
      };

      const mockToken = "mock-jwt-token-" + Date.now();

      localStorage.setItem("authToken", mockToken);
      localStorage.setItem("userData", JSON.stringify(newUser));
      setUser(newUser);

      return { success: true };
    } catch (error) {
      return { success: false, error: "An error occurred during signup" };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  // Update user function
  const updateUser = (userData) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
