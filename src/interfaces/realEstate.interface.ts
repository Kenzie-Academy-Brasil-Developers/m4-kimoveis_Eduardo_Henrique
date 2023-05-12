import { z } from "zod";
import { realEstateSchema, realEstateRequest } from "../schemas/realEstate.schemas";

export type TRealEstateResponse = z.infer<typeof realEstateSchema>
export type TRealEstateRequest = z.infer<typeof realEstateRequest>
// export type TRealEstateWithoutAddress = z.infer<typeof realEstateWithoutAddressSchema>
