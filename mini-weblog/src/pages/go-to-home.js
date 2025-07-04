import { useEffect } from "react";
import { useRouter } from "next/router";

export default function GoToHome() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <h2>Please Wait...</h2>
            <p>Redirect To Home Page</p>
        </div>
    );
}