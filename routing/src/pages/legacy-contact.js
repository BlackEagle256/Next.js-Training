export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/contact",
            permanent: true,
        }
    }
}

export default function legacyContact() {
    return null;
}