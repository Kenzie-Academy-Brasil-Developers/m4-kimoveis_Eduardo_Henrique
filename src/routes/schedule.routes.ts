import { Router } from "express";
import {
  createScheduleController,
  listScheduleController,
} from "../controllers/schedule.controller";
import { ensureTokenIsValid } from "../middleware/ensureTokenIsValid";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { scheduleSchemaRequest } from "../schemas/schedules.schemas";
import { ensureRealEstateIdExist } from "../middleware/ensureRealEstateIdExists";
import { ensureValidDataSchedule } from "../middleware/ensureValidDataSchedule";
import { ensureValidPermission } from "../middleware/ensureValidPermission";
import { ensureScheduleRealEstateExist } from "../middleware/ensureScheduleRealEstateExist";

export const schedulesRoutes: Router = Router();
schedulesRoutes.post(
  "",
  ensureTokenIsValid,
  ensureValidateBody(scheduleSchemaRequest),
  ensureRealEstateIdExist,
  ensureScheduleRealEstateExist,
  ensureValidDataSchedule,
  createScheduleController
);
schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValid,
  ensureValidPermission,
  ensureRealEstateIdExist,
  listScheduleController
);
