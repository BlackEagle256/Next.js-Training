import React from 'react'

export default function Responsive() {
    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <h1 className='text-2xl font-bold mb-6 text-center'>Responsive Cart</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {['Cart 1', 'Cart 2', 'Cart 3', 'Cart 4', 'Cart 5', 'Cart 6'].map((title, index) => (
                    <div key={index} className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
                        <h2 className='text-lg font-semibold mb-2'>{title}</h2>
                        <p className='text-gray-600 text-sm'>Content Of Card</p>
                    </div>
                ))}
            </div>

            {/* <p class="text-sm md:text-lg lg:text-xl">
                این متن در موبایل کوچکتره و در دسکتاپ بزرگ‌تر
            </p> */}
        </div>
    )
}
