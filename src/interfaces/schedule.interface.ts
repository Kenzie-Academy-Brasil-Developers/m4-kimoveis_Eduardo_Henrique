import { z } from "zod";
import { scheduleSchema } from "../schemas/schedules.schemas";

export type TScheduleResponse = z.infer<typeof scheduleSchema>;
