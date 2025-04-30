import { getSession } from "@/auth";

export default async function HomePage() {
  const session = await getSession();

  return (
    <div>
      <h1>Välkommen till Better Auth Demo</h1>
      {session?.user ? (
        <p>Inloggad som {session.user.email}</p>
      ) : (
        <a href="/api/auth/signin">Logga in</a>
      )}
    </div>
  );
}
