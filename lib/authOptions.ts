import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import TwitterProvider from "next-auth/providers/twitter";

const redirectUri = process.env.VERCEL == '1' ? 'https://quest.zknoid.io' : 'http://localhost:3000'
export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: `https://discord.com/api/oauth2/authorize?scope=identify+email&redirect_uri=${encodeURI(redirectUri)}/api/auth/callback/discord`
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0",

    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/";
    },
    async signIn({ account }) {
      if (!account) return false;

      //

      return true;
    },

    async jwt({ token, account, user }) {
      if (account) {
        token = Object.assign({}, token, {
          [`${account.provider}_access_token`]: account.access_token,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          twitter_access_token: token.twitter_access_token,
          discord_access_token: token.discord_access_token,
        });
        console.log(session);
      }
      return session;
    },
  },
};
