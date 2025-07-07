import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GetUserData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(data);
        }
        catch (error) {
            console.error("error: ", error);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div>
            <h1>List Of Users</h1>
            {loading ? (
                <p>Loading Data...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
