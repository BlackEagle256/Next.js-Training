import Link from "next/link";

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await res.json();

    const paths = blogs.map((blog) => ({
        params: { id: blog.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const blog = await res.json();

    return {
        props: {
            blog,
        },
    };
}

export default function BlogPostPage({ blog }) {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <br />
            <Link href="/posts" style={{ color: "blue", textDecoration: "underline" }}>Back To Home Page</Link>
        </div>
    )
}
