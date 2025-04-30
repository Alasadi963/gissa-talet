"use client";
import { signIn, signOut } from "@/lib/auth";

export default function AuthButtons() {
  return (
    <div>
      <button onClick={() => signIn("github")}>Logga in med GitHub</button>
      <button onClick={() => signOut()}>Logga ut</button>
    </div>
  );
}
