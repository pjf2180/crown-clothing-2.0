"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { getUser } from "./data/user/getUser";
import { createUser } from "./data/user/createUser";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { syncCartItemsRequest } from "./clientApi/cart/cartApi";

// 1. Define the form schema with preprocessing for the 'items' field
const CartSchema = z.array(
  z.object({
    productId: z
      .number()
      .int("Product ID must be an integer")
      .positive("Product ID must be a positive number"),

    quantity: z
      .number()
      .int("Quantity must be an integer")
      .positive("Quantity must be a positive number"),
  })
);

const EmailSchema = z
  .string()
  .email()
  .min(3, "Email must be at least 3 characters long");

const PasswordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters long");

const SignUpSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
  cart: z.preprocess((arg) => {
    if (typeof arg === "string") {
      try {
        return JSON.parse(arg);
      } catch (e) {
        // If JSON parsing fails, return undefined to trigger a validation error
        return undefined;
      }
    }
    // If 'items' is not a string, return undefined to trigger a validation error
    return undefined;
  }, CartSchema),
});

type LoginFormInput = z.infer<typeof LoginSchema>;
type SignUpFormInput = z.infer<typeof SignUpSchema>;

export async function loginAction(
  prevState: { errorMessage?: string },
  formData: FormData
) {
  try {
    const data = {
      email: formData.get("login-email"),
      password: formData.get("login-password"),
      cartJson: formData.get("cart"),
    };

    // Parse and validate the data using Zod
    const parsedData: LoginFormInput = LoginSchema.parse({
      email: data.email,
      password: data.password,
      cart: data.cartJson,
    });

    const { email, password } = parsedData;

    const url = await signIn("credentials", {
      redirect: false,
      email,
      password: password,
    });

    const cartItemsJson = formData.get("cart");

    await syncCartItemsRequest(
      email as string,
      cartItemsJson ? JSON.parse(cartItemsJson as string) : []
    );
    redirect(url);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      console.error("Validation errors:", error.errors);
      // You can send these errors back to the client or handle them accordingly
    } else if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { errorMessage: "Invalid credentials." };
        default:
          return { errorMessage: "Something went wrong." };
      }
    } else {
      // Handle other types of errors (e.g., network issues)
      console.error("An unexpected error occurred:", error);
    }
    throw error;
  }
}

export async function signUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const parsedData: SignUpFormInput = SignUpSchema.parse({
      email: data.email,
      password: data.password,
    });

    const { email, password } = parsedData;
    const user = await getUser(email);
    if (user) throw Error("Email In Use");
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashedPassword);
    redirect("/shop");
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.error("Validation errors:", error.errors);
    } else if (error.message === "Email In Use") {
      return "An account has been registered with that email";
    }
    throw error;
  }
}
