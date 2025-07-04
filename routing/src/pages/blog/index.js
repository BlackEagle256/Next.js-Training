import Link from "next/link";

export default function BlogList() {
    const blogs = [1, 2, 3, 4];

    return (
        <div>
            <h1>Blogs List</h1>
            <ul>
                {blogs.map((id) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`}>blog title: ${id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}