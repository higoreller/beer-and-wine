import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize({ email, password }) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: "POST",
            body: new URLSearchParams({ identifier: email, password }),
          }
        );

        const data = await response.json();

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.username;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};

export default NextAuth(authOptions);
