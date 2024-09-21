import db from "../../prisma/client";
import { User } from "@prisma/client";

export async function createUser(
  email: string,
  passwordHash: string
): Promise<User | null> {
  try {
    const user = await db.user.create({
      data: { email, password: passwordHash },
    });
    return user;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user");
  }
}
