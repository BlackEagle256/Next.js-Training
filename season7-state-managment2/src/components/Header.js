import { useUserStore } from '@/context/store/userStore';
import React from 'react'

export default function Header() {
    const { user, isLoggedIn, logout } = useUserStore();
    console.log(user)
    console.log('isLoggedIn:', isLoggedIn);

    return (
        <header className='flex justify-between items-center bg-gray-800 text-white p-4'>
            <h1 className='text-lg font-bold'>My Online Shop</h1>
            {isLoggedIn ? (
                <div className="flex items-center gap-4">
                    <span>Hello, {user.formData.email}</span>
                    <button
                        onClick={logout}
                        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <a
                    href="./login"
                    className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Login
                </a>
            )}
        </header>
    )
}
