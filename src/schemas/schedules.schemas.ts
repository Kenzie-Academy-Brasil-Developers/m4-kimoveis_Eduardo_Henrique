import { z } from "zod";
import { realEstateScheduleResponse } from "./realEstate.schemas";
import { categoriesSchemaResponse } from "./categories.schemas";
import { userSchema } from "./users.schemas";

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.string().nonempty(),
  hour: z.string().nonempty(),
  realEstate: realEstateScheduleResponse,
});
export const scheduleWithOutRealEstateSchema = scheduleSchema.omit({
  realEstate: true,
});
export const scheduleSchemaRequest = scheduleSchema
  .omit({
    realEstate: true,
    id: true,
  })
  .extend({ realEstateId: z.number().nonnegative() });

  export const realEstateWithSchedulesSchema = z.object({
    category:categoriesSchemaResponse,
    createdAt: z.string(),
    id: z.number(),
    schedules: z.array(userSchema), 
    size: z.number().int(),
    sold: z.boolean().default(false),
    updatedAt: z.string(),
    
  })