import { z } from "zod";
import { realEstateScheduleResponse } from "./realEstate.schemas";

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.string().nonempty(),
  hour: z.string().nonempty(),
  realEstate: realEstateScheduleResponse,
});
export const scheduleSchemaRequest = scheduleSchema
  .omit({
    realEstate: true,
    id: true,
  })
  .extend({ realEstateId: z.number().nonnegative() });
