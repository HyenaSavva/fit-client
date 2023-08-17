import { z } from "zod";

/**
 * ✅ DX Best practice (Type safe)
 *
 * Validate env variables with zod
 */
const ZodEnvVariables = z.object({
  VITE_API_ENDPOINT: z.string().url(),
  VITE_API_STORAGE_MODE: z.enum(["session", "local"]).optional(),
  VITE_API_DELAY: z
    .string()
    .regex(/^\d+$/, { message: "Must be a positive number" })
    .optional(),
  VITE_JWT_SECRET: z.string().min(1),
});

ZodEnvVariables.parse(import.meta.env);

declare global {
  interface ImportMetaEnv extends z.infer<typeof ZodEnvVariables> {}
}

export const config = {
  API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
  API_DELAY: Number(import.meta.env.VITE_API_DELAY) || 100,
  API_STORAGE_MODE: import.meta.env.VITE_API_STORAGE_MODE,
  JWT_SECRET: import.meta.env.VITE_JWT_SECRET,
};
