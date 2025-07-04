import { useRouter } from "next/router";

export default function SearchPage() {
    const router = useRouter();
    const routerLog = router;

    console.log(routerLog);

    const { term, sort } = router.query;

    return (
        <div>
            <h1>Result Search:</h1>
            <p>Search Parameter: ${term}</p>
            <p>sort Parameter: ${sort}</p>
        </div>
    )
}