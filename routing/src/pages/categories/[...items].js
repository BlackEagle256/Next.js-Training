export async function getServerSideProps({ params }) {
    const items = params.items || []

    return {
        props: { items}
    }
}

export default function CategoriesPage({ items }) {
    return (
        <div>
            <h1>Categories</h1>
            {items.length === 0 ? (
                <p>No Categories Selected</p>
            ) :
                (
                    <p>Path: {items.join(">")}</p>
                )}
        </div>
    )
}