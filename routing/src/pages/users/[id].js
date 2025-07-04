export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    console.log("params+++++",params);

    return { props: { user } };
}

export default function UserPage({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
        </div>
    )
}