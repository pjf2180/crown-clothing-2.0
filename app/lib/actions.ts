"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { getUser } from "./data/user/getUser";
import { createUser } from "./data/user/createUser";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function loginAction(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    formData.set("email", formData.get("login-email") ?? "");
    formData.set("password", formData.get("login-password") ?? "");
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log("Signing up");
    const credentials: { email: string; password: string } = {
      email: formData.get("email")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
    };
    const parsedCredentials = z
      .object({ email: z.string().email(), password: z.string().min(6) })
      .safeParse(credentials);
    if (parsedCredentials.success === false) {
      throw Error();
    }
    const { email, password } = parsedCredentials.data;
    const user = await getUser(email);
    if (user) throw Error("Email In Use");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Creating user: ", email, hashedPassword);
    await createUser(email, hashedPassword);
    redirect("/shop");
  } catch (error: any) {
    console.log("Error Signing up");
    if (error.message === "Email In Use") {
      return "An account has been registered with that email";
    }
    throw error;
  }
}
