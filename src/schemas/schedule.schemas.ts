import { z } from "zod";

export const VisitSchema = z.object({
  id: z.number().optional(),
  date: z.string().nonempty(),
  hour: z.string().nonempty(),
  realEstateId: z.number(),
  userId: z.number()
});