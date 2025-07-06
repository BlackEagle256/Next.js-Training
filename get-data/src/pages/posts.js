import Link from "next/link";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        return {
            notFound: true
        }
    }
    const blogs = await res.json();

    return {
        props: {
            blogs,
        },
    };
}

export default function getData({ blogs }) {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>List of Blogs</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/posts/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
