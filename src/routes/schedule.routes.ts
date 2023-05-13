import { Router } from "express";
import { createScheduleController } from "../controllers/schedule.controller";
import { ensureTokenIsValid } from "../middleware/ensureTokenIsValid";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { scheduleSchemaRequest } from "../schemas/schedules.schemas";
import { ensureRealEstateIdExist } from "../middleware/ensureRealEstateIdExists";
import { ensureValidDataSchedule } from "../middleware/ensureValidDataSchedule";

export const schedulesRoutes: Router = Router();
schedulesRoutes.post(
  "",
  ensureTokenIsValid,
  ensureValidateBody(scheduleSchemaRequest),
  ensureRealEstateIdExist,
  ensureValidDataSchedule,
  createScheduleController
);
