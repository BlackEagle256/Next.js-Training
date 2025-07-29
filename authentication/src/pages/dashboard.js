import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('username')
        if (!storedUser) {
            router.replace("./login")
        }
        else {
            setUser(storedUser)
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        router.push('./login')
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-green-300 gap-4'>
            <h1 className='text-2xl font-bold'>Welcome, {user}</h1>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    )
}
