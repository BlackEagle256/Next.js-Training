import Link from "next/link";

export default function UserList() {
    const users = [1, 2, 3, 4];

    return(
        <div>
            <h1>List of Users</h1>
            <ul>
                {users.map((id)=>(
                    <li key={id}>
                        <Link href={`/users/${id}`}>User Number: ${id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}