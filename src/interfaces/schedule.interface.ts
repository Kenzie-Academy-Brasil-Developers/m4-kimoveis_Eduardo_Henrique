import { z } from "zod";
import { realEstateWithSchedulesSchema, scheduleSchema } from "../schemas/schedules.schemas";

export type TScheduleResponse = z.infer<typeof scheduleSchema>;
export type TSchedulesWithRealEstateResponse= z.infer<typeof realEstateWithSchedulesSchema>;
