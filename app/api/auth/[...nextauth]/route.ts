import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
const handler = NextAuth({
    providers: [
        GithubProvider({
            clientSecret:
                process.env.GITHUB_SECRET || "your github oauth secret",
            clientId: process.env.GITHUB_ID || "your github id",
        }),
        GoogleProvider({
            clientSecret: process.env.GOOGLE_SECRET || "your google secret",
            clientId: process.env.GOOGLE_CLIENT || "your google id",
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            try {
                if (token.user === undefined) token = { user: { ...token } };
                const { data } = await axios.post(
                    `${process.env.BACKEND_URL}/auth/oAuth`,
                    {
                        ...token,
                    }
                );
                console.log(data.success)
                if (data.success) {
                    console.log(data.user, "\n\n\n ");
                    return { user: data.user, token: data.token };
                }
                return token;
            } catch (err) {
                return token;
            }
        },
    },
});

export { handler as GET, handler as POST };
