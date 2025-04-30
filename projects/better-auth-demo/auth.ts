import { BetterAuth } from "better-auth";
import GitHub from "better-auth/providers/github";

export const { auth, handlers, getSession } = BetterAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
});
