import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "778584376144-96vh3qahcl1rv6cvt8nrug2spnhndqlo.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
})