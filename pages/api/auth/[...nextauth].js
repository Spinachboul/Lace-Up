import NextAuth from 'next-auth';
import prisma from '../../../prisma/lib/client'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

async function getUser(sessionToken){
    try {
        const session = await prisma.session.findUnique({
            where: {
                sessionToken: sessionToken,
            },
            include: {
                user: {
                    include: {
                        matches: true,
                    },
                },
            },
        });

        if (session && session.user) {
            return session.user;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        return null;
    }
}

export default NextAuth({
    secret: process.env.AUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session(session, user){
            const fullUser = await getUser(session.sessionToken);
            if(fullUser){
                session.user = fullUser;
            }
            return session;
        },
    },
});
