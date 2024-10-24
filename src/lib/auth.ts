import { AuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github"

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      profile: (profile: GithubProfile) => ({
        id: profile.id.toString(),
        name: profile.name ?? profile.login,
        email: profile.email,
        image: profile.avatar_url,
        githubProfille: profile
      }),
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.githubProfile = profile
      }
      return token
    },
    async session({ session, token }) {
      session.user.githubProfile = token.githubProfile as GithubProfile
      return session
    }
  }
}