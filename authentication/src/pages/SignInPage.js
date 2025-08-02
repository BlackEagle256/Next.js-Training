import { signIn } from "next-auth/react";

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-600">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <button
                onClick={() => signIn("google", { callbackUrl: "/dashboardGoogle" })}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Sign in with Google
            </button>
        </div>
    );
}
