import Link from "next/link";

export default function Custom404(){
    return(
        <div style={{textAlign:"center",padding:"3rem"}}>
            <h1>404: PAGES NOT FOUND</h1>
                <p>Sorry Your Page Not Found</p>
                <Link href={"/"}>Back To Home</Link>
        </div>
    )
}