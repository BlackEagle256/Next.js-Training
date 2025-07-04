export async function getServerSideProps({ params }) {
    return {
        redirect: {
            destination: `/blog/${params.id}`,
            permanent: true,
        }
    }
}

export default function OldBlog(){
    return null;
}