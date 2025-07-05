import Link from "next/link";
import Styles from "@/styles/Home.module.css"

export default function HomePage() {
  const blogs = [
    { id: 1, title: "First Blog" },
    { id: 2, title: "Second Blog" },
    { id: 3, title: "Third Blog" },
  ]

  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>List of Blogs</h1>
      <ul className={Styles.list}>
        {blogs.map((blog) => (
          <li className={Styles.item} key={blog.id}>
            <Link className={Styles.link} href={`/blog/${blog.id}`}>📝 {blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}