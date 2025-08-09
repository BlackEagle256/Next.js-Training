import { useAuth } from '@/context/AuthContext'
import React from 'react'

export default function Profile() {
    const { isLoggedIn, user, login, logout } = useAuth();

    console.log([
        { isLoggedIn },
        { user },
        { login },
        { logout },
    ])

    if (!isLoggedIn) {
        return <p style={{ padding: 20 }}>You must login first!</p>;
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
        </div>
    )
}
