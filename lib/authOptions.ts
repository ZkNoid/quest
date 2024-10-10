import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";

const redirectUri = process.env.VERCEL == '1' ? 'https://zknoid-quest.vercel.app' : 'http://localhost:3000'
export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: `https://discord.com/api/oauth2/authorize?scope=identify+email&redirect_uri=${encodeURI(redirectUri)}%2Fapi%2Fauth%2Fcallback%2Fdiscord`
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/";
    },
    async signIn({ account }) {
      if (!account) return false;

      const discordToken = account.access_token;

      // const user = await fetch(`https://discord.com/api/users/@me`, {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${discordToken}`,
      //   },
      // }).then((res) => res.json());

      // if (user['id']) {
      //   return true;
      // };

      return false;
    },

    async jwt({ token, account }) {
      if (account) {
        token = Object.assign({}, token, {
          access_token: account.access_token,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
        });
        console.log(session);
      }
      return session;
    },
  },
};
