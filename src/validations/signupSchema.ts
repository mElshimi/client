import { z } from "zod";

const signupSchema = z
  .object({
    name: z.string().min(1, { message: "First name is required" }),
    email: z.string().min(1, { message: "Email address is required" }).email(),
    phone: z.string().min(1, { message: "Phone number is required" }),
    password: z.string(),
    // .min(8, { message: "Password must be at least 8 characters longs" })
    // .regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/, {
    //   message:
    //     "Password must contain at least one digit, lowercase letter, uppercase letter, special character",
    // }),
    Repassword: z.string().min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.Repassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

type signupType = z.infer<typeof signupSchema>;

export { signupSchema, type signupType };
