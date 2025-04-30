import Link from "next/link";

export default async function BlogPage() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });
    const posts = await res.json();

    return (
        <div>
            <h1>Blogginlägg</h1>
            <ul>
                {posts.map((post: { id: string; title: string }) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
