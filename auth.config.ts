import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // const isLoggedIn = !!auth?.user;
      // const isOnLogin = nextUrl.pathname.startsWith("/login");
      // if (isOnLogin && isLoggedIn) {
      //   return Response.redirect(new URL("/", nextUrl));
      // }
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
