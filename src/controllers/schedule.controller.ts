import { Request, Response } from "express";
import { createScheduleService } from "../services/schedule/createSchedule.service";
import { listScheduleService } from "../services/schedule/listSchedule.service";

export const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idUser = response.locals.idUser;
  const payload = request.body;
  await createScheduleService(payload, idUser);
  return response.status(201).json({ message: "Schedule created" });
};
export const listScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idParams: number = Number(request.params.id);
  const listSchedules = await listScheduleService(idParams);
  return response.status(200).json(listSchedules);
};
