import { z } from "zod";

const logInSchema = z.object({
  email: z.string().min(1, { message: "Email address is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters longs" })
    .regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/, {
      message:
        "Password must contain at least one digit, lowercase letter, uppercase letter, special character",
    }),
});

type logInType = z.infer<typeof logInSchema>;

export { logInSchema, type logInType };
