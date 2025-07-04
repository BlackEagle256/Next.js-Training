import Link from "next/link";

export default function HomePage() {
  const blogs = [
    { id: 1, title: "First Blog" },
    { id: 2, title: "Second Blog" },
    { id: 3, title: "Third Blog" },
  ]

  return (
    <div style={{ padding: '2rem' }}>
      <h1>List of Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>📝 {blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}