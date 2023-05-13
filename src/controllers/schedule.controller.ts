import { Request, Response } from "express";
import { createScheduleService } from "../services/schedule/createSchedule.service";

export const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idUser = response.locals.idUser;
  const payload = request.body;
  await createScheduleService(payload, idUser);
  return response.status(201).json({message: "Schedule created"});
};
