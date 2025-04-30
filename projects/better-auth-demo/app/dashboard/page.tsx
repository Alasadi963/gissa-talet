import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <p>Du måste vara inloggad för att se denna sida.</p>;
  }

  return (
    <div>
      <h1>Välkommen, {session.user?.name}!</h1>
    </div>
  );
}
