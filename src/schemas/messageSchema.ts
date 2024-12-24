import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content Must be at least 10 characters long" })
    .max(300, "Not more than 300 characters allowed"),
});
