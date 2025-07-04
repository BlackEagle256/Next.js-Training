import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    const blog = await res.json();

    return {
        props: { blog },
    };
}

export default function BlogPage({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
}