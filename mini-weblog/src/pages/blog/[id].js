import { notFound } from "next/navigation";

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (!res) {
        return { notFound: true }
    }

    const blogList = await res.json();

    return {
        props: { blogList }
    }
}

export default function BlogPage({ blogList }) {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>{blogList.title}</h1>
            <p>{blogList.body}</p>
        </div>
    )
}