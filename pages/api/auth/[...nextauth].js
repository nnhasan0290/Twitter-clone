import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  secret: process.env.SECRET,

  callbacks: {
    async session({ session, token, user }) {
      session.user.uid = token.sub;
      session.user.username = "@" + session.user.name.replace(" ", "");
      return session;
    },
  },
});
