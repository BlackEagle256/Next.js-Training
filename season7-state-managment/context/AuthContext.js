"use client";
import { createContext, useState, useContext } from "react";

// 1. Create Context
const AuthContext = createContext();

// 2. Create Provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Save Registered User

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3. Create CustomHook
export function useAuth() {
    return useContext(AuthContext);
}
