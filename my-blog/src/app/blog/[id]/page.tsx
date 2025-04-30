interface BlogPostPageProps {
    params: {
        id: string;
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });
    const posts = await res.json();
    const post = posts.find((p: { id: string }) => p.id === params.id);

    if (!post) {
        return <h1>Inlägget hittades inte!</h1>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
