import { z } from "zod";
import { AddressSchemaRequest, addressSchemaResponse } from "./address.schemas";
import { categoriesSchemaResponse } from "./categories.schemas";

export const realEstateSchema = z.object({
  createdAt: z.string(),
  id: z.number(),
  sold: z.boolean().default(false),
  size: z.number().int(),
  updatedAt: z.string(),
  value: z.number().or(z.string()).default(0),
  address: addressSchemaResponse,
  category: categoriesSchemaResponse,
});

export const realEstateRequest = z.object({
  value: z.number().or(z.string()).default(0),
  size: z.number().int().gt(0, "Number must be greater than 0"),
  address: AddressSchemaRequest,
  categoryId: z.number(),
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
