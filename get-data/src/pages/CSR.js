import { useEffect, useState } from "react";

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    if (loading)
        return <p>Loading Data...</p>

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h1>{user.name}</h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}