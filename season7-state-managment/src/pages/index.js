// import { useAuth } from '@/context/AuthContext'      API-Context
import { useAuthStore } from '@/context/store/authStore';   //Zustand

export default function Home() {
  // const { isLoggedIn, user, login, logout } = useAuth();        //API-Context
  const { isLoggedIn, user, login, logout } = useAuthStore();   //Zustand

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-center pt-14'>
      <div className='flex flex-col items-center justify-center'>

        <h1>Home Page</h1>

        {isLoggedIn ? (
          <>
            <p>Welcome, {user.name}!</p>
            <button
              className='bg-red-500 px-6 py-4 rounded-xl my-4 text-white'
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p>You are not logged in</p>
            <button
              className='bg-blue-500 px-6 py-4 rounded-xl my-4 text-white'
              onClick={() => login("John Doe")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
