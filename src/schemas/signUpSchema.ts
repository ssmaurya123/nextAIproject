import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast two characters")
  .max(20, "must be not more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "password must be atlest 6 characters",
  }),
});
