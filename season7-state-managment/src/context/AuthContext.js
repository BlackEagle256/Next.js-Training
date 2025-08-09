import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setIsLoggedIn(true);
            setUser(JSON.parse(storedUser));
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn && user) {
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            localStorage.removeItem("user")
        }
    }, [isLoggedIn, user])

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