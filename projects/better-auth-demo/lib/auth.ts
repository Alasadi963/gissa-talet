// lib/auth.ts
import { createBetterAuth } from 'better-auth'

export const { auth, handlers } = createBetterAuth({
  providers: [
    // Exempel: GitHub provider
    {
      id: 'github',
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  ],
  // Övriga inställningar
  session: {
    strategy: 'jwt',
  },
})
