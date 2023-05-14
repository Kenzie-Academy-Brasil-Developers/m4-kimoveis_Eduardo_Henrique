import { z } from "zod";
import { AddressSchemaRequest, addressSchemaResponse } from "./address.schemas";
import { categoriesSchemaResponse } from "./categories.schemas";
import { userSchema } from "./users.schemas";

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchemaResponse,
  category: categoriesSchemaResponse,
});

export const realEstateRequest = z.object({
  value: z.number().or(z.string()).default(0),
  size: z.number().int().gt(0, "Number must be greater than 0"),
  address: AddressSchemaRequest,
  categoryId: z.number(),
});

export const realEstateScheduleResponse = realEstateSchema.omit({
  address: true,
  category: true,
});

export const realEstateCategorySchema = z.object({
  category: categoriesSchemaResponse,
  realEstate: z.array(
    realEstateSchema.omit({
      address: true,
      category: true,
    })
  ),
});

export const realEstatesSchemaResponse = realEstateSchema.extend({
  address: addressSchemaResponse,
});
