import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45).nonempty(),
  email: z.string().email().max(45).nonempty(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional(),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userSchemaResponse = userSchema.omit({
  password: true,
});
