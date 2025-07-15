import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function ButtonGhost() {
    return (
        <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 px-4 py-10'>
            <h1 className='text=3xl font-bold'>Buttons in Tailwind</h1>
            <button
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-200'>
                Button
            </button>

            <button
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-md transition duration-200">
                outline Button
            </button>

            <button className='text-blue-600 hover:bg-blue-100 font-semibold py-2 px-6 rounded-md transition duration-200'>
                Ghost Button
            </button>

            <button className='bg-gray-400 text-white font-semibold py-2 px-6 rounded-md cursor-not-allowed opacity-50'>
                Disable Button
            </button>

            <button
                className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md flex items-center gap-2 transition duration-200'
            >
                Continue...<FaArrowRight />
            </button>
        </div>
    )
}
