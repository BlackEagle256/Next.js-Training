import { getSession, signOut, useSession } from "next-auth/react";

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log("session:", session);

    if (!session) {
        return {
            redirect: { destination: "/SignInPage", permanent: false },
        };
    }

    return { props: { session } };
}

export default function Dashboard() {
    const { data: session, status } = useSession();
    console.log("session")
    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return <p>Access Denied. Please sign in.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl">Welcome, {session.user.name}</h1>
            <img src={session.user.image} className="rounded-full w-24 h-24" />
            <p>{session.user.email}</p>
            <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Sign out
            </button>
        </div>
    );
}