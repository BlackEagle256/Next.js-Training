import React, { useEffect, useState } from 'react'

export default function UserFunction() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data => {
                setUsers(data)
                setLoading(false)
                console.log("FetchUser Function Called");

            }))
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div style={{ padding: "2rem" }}>
            <h1>List Of Users</h1>

            {loading ? (
                <p>⏳ Loading Users Data...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            👤 <strong>{user.name}</strong> 📧 {user.email}
                        </li>
                    ))}
                </ul>
            )}

            <button onClick={fetchUsers} style={{ marginTop: "1rem", cursor: "pointer" }}>
                🔄 رفرش لیست کاربران
            </button>
        </div>
    );
}