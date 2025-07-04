import Link from "next/link"

export default function Custom404() {
    return (
        <div style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: "column", margin: "auto", }}>
            <h1>404 - Page Not Found</h1>
            <p>Route Is Not Exist</p>
            <Link href="/" style={{ color: "red" }}>Go To Home Page</Link>
        </div>
    )
}