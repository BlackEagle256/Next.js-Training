import React from 'react'

export default function Header() {
    return (
        <header className="bg-white flex justify-between shadow-md px-6 py-4 items-center">
            <h1 className="font-bold text-blue-600 text-2xl">NextProfile</h1>
            <nav className="space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-500 ">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a>
            </nav>
        </header>
    )
}
