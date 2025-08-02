import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login: ", { username, password });
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <form
                onSubmit={handleLogin}
                className='bg-white p-8 rounded shadow-md w-full max-w-md'
            >
                <input
                    type="email"
                    placeholder='Email Address'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='mb-4 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500'
                />

                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mb-4 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500'
                />

                <button
                    type="submit"
                    className='bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition'
                >
                    Sign in
                </button>
            </form>
        </div>
    )
}
