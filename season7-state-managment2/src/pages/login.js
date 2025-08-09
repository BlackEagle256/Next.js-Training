import Header from '@/components/Header';
import { useUserStore } from '@/context/store/userStore'
import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const formData = {
        email: email,
        password: password
    }

    const { login } = useUserStore();

    const handleLogin = (e) => {
        e.preventDefault();

        login({ formData })
        alert("Login Completed")
    }
    return (
        <div>
            <Header />
            <div className="flex text-center items-center justify-center min-h-screen bg-gray-100">
                <form
                    className="bg-white p-6 rounded-lg shadow-lg w-96"
                    onSubmit={handleLogin}
                >
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input
                        className="border p-2 w-full mb-3 rounded"
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="border p-2 w-full mb-3 rounded"
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
