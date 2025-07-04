export async function getServerSideProps(context) {
    const { id } = context.params;

    return {
        redirect: {
            destination: `/blog/${id}`,
            permanent: true,
        },
    };
}

export default function OldBlogPage() {
    return null;
}
