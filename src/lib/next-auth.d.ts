import NextAuth from "next-auth";
import { User } from "../utils/types/User";

declare module "next-auth" {
  interface Session {
    user: User
  }
}

