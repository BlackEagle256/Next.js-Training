import React, { useState } from 'react'
import Header from "./components/Header";

export default function Contact() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }
    return (
        <div className='min-h-screen bg-gray-50'>

            <Header></Header>

            <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
                < form
                    onSubmit={handleSubmit}
                    className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6' >
                    <h2 className='text-2xl font-bold text-gray-800 text-center'>
                        Contact Us
                    </h2>
                    <div>
                        <label htmlFor="fullname" className='block text-sm font-medium text-gray-700 mb-1'>Full Name:</label>
                        <input
                            type="text"
                            id='name'
                            placeholder='Full Name'
                            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1 '>Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Email Address'
                            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder='Your Message...'
                            className='w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className={`w-full py-2 rounded-md transition text-white ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {loading ? "Loading..." : "Send Message..."}
                    </button>
                </form >
            </div >
        </div >
    )
}
