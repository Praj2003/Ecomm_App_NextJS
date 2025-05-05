import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import ConnectDB from "@/lib/connectDB";
import UserModel from "@/models/UserModel";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await ConnectDB();

        const currUser = await UserModel.findOne({ email: user.email });

        if (!currUser) {
          //we have to create the user

          const newUser = await UserModel.create({
            email: user.email,
            username: user.email.split("@")[0],
          });

          await newUser.save();
        }

        return true;
      }
    },
  },
});

export { handler as GET, handler as POST };
