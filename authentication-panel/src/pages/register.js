import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password }),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Register was Successful!");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.warning("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className='min-h-screen flex bg-gray-100 px-4 justify-center items-center'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
          Create an Account
        </h2>

        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-700 ml-1">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className='block mb-1 text-sm font-medium text-gray-700 ml-1'>
              Email Address:
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Email Address'
              className='w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
              required
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
      <ToastContainer />
    </div>
  );
}
