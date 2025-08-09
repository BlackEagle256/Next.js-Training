import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { isLoggedIn, user, login, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>

      {isLoggedIn ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in</p>
          <button onClick={() => login("John Doe")}>Login</button>
        </>
      )}
    </div>
  );
}
