// import { useAuth } from '@/context/AuthContext'      API-Context
import { useAuthStore } from '@/context/store/authStore';   //Zustand
import React from 'react'

export default function Profile() {
    // const { isLoggedIn, user, login, logout } = useAuth();        //API-Context
    const { isLoggedIn, user, login, logout } = useAuthStore();   //Zustand    

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
        <div className='w-full h-screen flex flex-col justify-center items-center text-center pt-14'>
            <div className='flex flex-col items-center justify-center'>
                <h1>Profile Page</h1>
                <p>Name: {user.name}</p>
                <button
                    className='bg-blue-500 px-6 py-4 rounded-xl my-4 text-white'
                    onClick={() => login("MH")}
                >
                    Change Name
                </button>
            </div>
        </div>
    )
}
