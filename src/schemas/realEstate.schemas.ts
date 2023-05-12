import { z } from "zod";
import { AddressSchemaRequest, addressSchemaResponse } from "./address.schemas";
import {
  categoriesSchemaRequest,
  categoriesSchemaResponse,
} from "./categories.schemas";

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address:addressSchemaResponse,
  category: categoriesSchemaResponse,
});

export const realEstateRequest = z.object({
  value: z.number().or(z.string()).default(0),
  size: z.number().int(),
  address:AddressSchemaRequest,
  categoryId:z.number()
})

// export const realEstateSchemaResponse = realEstateSchema.extend({
//   address: addressSchemaResponse,
//   category: categoriesSchemaResponse,
// });

// export const realEstateSchemaRequest = realEstateSchema
//   .omit({
//     id: true,
//     createdAt: true,
//     updatedAt: true,
//     sold: true,
//     categoryId: true,
//   })
//   .extend({
//     address: AddressSchemaRequest,
//   });

// export const realEstateWithoutAddressSchema = realEstateSchemaRequest.omit({
//   address: true,
// });
