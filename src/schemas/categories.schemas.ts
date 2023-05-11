import { z } from "zod";

export const categoriesSchemaResponse = z.object({
  id: z.number(),
  name: z.string().max(45).nonempty(),
});

export const categoriesSchemaRequest = categoriesSchemaResponse.omit({
  id: true,
});

export const allCategoriesSchemasResponse = z.array(categoriesSchemaResponse);
