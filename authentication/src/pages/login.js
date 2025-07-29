import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        if (username) {
            localStorage.setItem("username", username)
            router.push("./dashboard")
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("username");
        if (user) {
            router.replace("/dashboard");
        }
    }, []);

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-4 bg-gray-100'>
            <h1 className='text-2xl font-bold'>Login Page</h1>
            <input type="text"
                placeholder='username'
                className='border p-2 rounded'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Login
            </button>
        </div>
    )
}
