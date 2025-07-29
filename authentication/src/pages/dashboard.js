export async function getServerSideProps({req}) {
    const cookie = req.headers.cookie || "";
    const user = cookie
        .split(";")
        .find((c) => c.trim().startsWith("user="))
        ?.split("=")[1];

    if (!user) {
        return {
            redirect: {
                destination: "./login",
                permanent: false
            }
        }
    }

    return {
        props: {
            user,
        }
    }
}

export default function Dashboard({ user }) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Welcome, {user}!</h1>
        </div>
    )
}