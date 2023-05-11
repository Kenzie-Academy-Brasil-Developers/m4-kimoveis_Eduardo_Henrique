import { z } from "zod";
import { allCategoriesSchemasResponse, categoriesSchemaRequest, categoriesSchemaResponse } from "../schemas/categories.schemas";

export type TCategoryRequest = z.infer<typeof categoriesSchemaRequest>
export type TCategoryResponse = z.infer<typeof categoriesSchemaResponse>
export type TCategoriesResponse = z.infer<typeof allCategoriesSchemasResponse>