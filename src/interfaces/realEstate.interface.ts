import { z } from "zod";
import { realEstateSchema, realEstateRequest, realEstateCategorySchema } from "../schemas/realEstate.schemas";

export type TRealEstateResponse = z.infer<typeof realEstateSchema>
export type TRealEstateRequest = z.infer<typeof realEstateRequest>
export type TRealEstateCategorySchema = z.infer<typeof realEstateCategorySchema>
