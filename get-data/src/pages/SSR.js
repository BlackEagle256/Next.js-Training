export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    console.log(users);

    return {
        props: {
            users
        },
    }
}

export default function getData({ users }) {
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}