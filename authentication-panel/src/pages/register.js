import Link from "next/link";

export default function Register() {
  return (
    <div className='min-h-screen flex bg-gray-100 px-4 justify-center items-center'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
          Create an Account
        </h2>

        <form className='space-y-5'>
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-700 ml-1">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="FullName"
            />
          </div>

          <div>
            <label htmlFor="email" className='block mb-1 text-sm font-medium text-gray-700 ml-1'>
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder='Email Address'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-gray-600'>
          Already have an account?{" "}
          <Link
            href="./login"
            className="text-blue-600 hover:underline"
          >
            Login here
            </Link>
        </p>
      </div>
    </div>
  )
}
