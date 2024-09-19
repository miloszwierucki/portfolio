import GitHub from "next-auth/providers/github";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      authorization: {
        params: {
          scope: "repo,user",
        },
      },
    }),
  ],
});
