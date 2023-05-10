import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45).nonempty(),
  email: z.string().max(45).email().nonempty(),
  admin: z.boolean().optional().default(false),
  password: z.string().min(4).max(120).nonempty(),
  createdAt: z.string().nullish().optional(),
  updatedAt: z.string().nullish().optional(),
  deletedAt: z.string().nullish().optional(),
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

export const allUsersSchemaResponse = z.array(userSchemaResponse);
