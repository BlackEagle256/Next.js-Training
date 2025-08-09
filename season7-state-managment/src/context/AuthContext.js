import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (username) => {
        setIsLoggedIn(true);
        setUser({ name: username })
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    }

    return (
        <div>
            <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}