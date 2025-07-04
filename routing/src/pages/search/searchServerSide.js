export async function getServerSideProps(context) {
    const { term, sort } = context.query;

    return {
        props: {
            term: term || "Nothing For Search",
            sort: sort || "default",
        },
    };
}

export default function SearchPage({ term, sort }) {
    return (
        <div>
            <h1>Result Search:</h1>
            <p>Search Parameter: ${term}</p>
            <p>sort Parameter: ${sort}</p>
        </div>
    )
}