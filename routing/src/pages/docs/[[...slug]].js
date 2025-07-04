export async function getServerSideProps({ params }) {
    const slug = params.slug || [];

    return {
        props: {
            path: slug,
        },
    };
}

export default function DocsPage({ path }) {
    return (
        <div>
            <h1>Docs Page</h1>
            <p>URL Address /{path.join("/")}</p>
        </div>
    )
}