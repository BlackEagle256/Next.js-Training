import React from 'react'
import { useAuth } from '../components/context/AuthContext'

export default function Header() {
    const { user, logout } = useAuth()
    console.log(user)

    return (
        <header className='flex justify-between items-center p-4 bg-gray-100'>
            <h2 className='font-bold'>MH APP</h2>
            {user ? (
                <div className='flex gap-4 items-center'>
                    <span>Welcome, {user.name}</span>
                    <button onClick={logout} className='text-red-500'>Logout</button>
                </div>
            ) : (
                <span>Not logged in</span>
            )}
        </header>

    )
}