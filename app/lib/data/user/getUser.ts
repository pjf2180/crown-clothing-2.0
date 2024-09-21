import db from "../../prisma/client";
import { User } from "@prisma/client";

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await db.user.findUnique({ where: { email: email } });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
