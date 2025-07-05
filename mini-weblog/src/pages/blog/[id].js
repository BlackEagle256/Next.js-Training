import styles from "../../styles/Blog.module.css";

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
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{blogList.title}</h1>
            <p className={styles.body}>{blogList.body}</p>
        </div>
    )
}