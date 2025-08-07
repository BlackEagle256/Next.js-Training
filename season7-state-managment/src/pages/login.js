import { useAuth } from '../../context/AuthContext'
import Header from './Header';
export default function Login() {
  const { login } = useAuth()

  const handleLogin = () => {
    login({ name: "Mohammad Hosein", email: "mohammadhoseindadgostr@gmail.com" });
    console.log("User logged in");
  };

  return (
    <>
      <div>
        <Header></Header>
      </div>

      <div className='min-h-screen flex flex-col items-center justify-center text-center'>
        <h1 className='text-xl font-bold mb-4'>Login Page</h1>
        <button onClick={handleLogin} className='bg-blue-500 text-white px-4 py-2 rounded'>
          Login as Test User
        </button>
      </div>
    </>
  );
}
