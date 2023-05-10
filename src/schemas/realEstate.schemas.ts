import { z } from "zod";

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string(),
  addressId: z.number(),
  categoryId: z.number().nullish(),
});
