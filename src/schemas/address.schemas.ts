import { z } from "zod";

export const addressSchemaResponse = z.object({
  id: z.number(),
  street: z.string().max(45).nonempty(),
  zipCode: z.string().max(8).nonempty(),
  number: z.string().max(7).nullable().optional(),
  city: z.string().max(20).nonempty(),
  state: z.string().max(2).nonempty(),
});

export const AddressSchemaRequest = addressSchemaResponse.omit({
  id:true
})
