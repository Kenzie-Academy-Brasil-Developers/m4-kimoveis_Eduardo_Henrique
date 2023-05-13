import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Schedule } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

export const ensureValidDataSchedule = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const payload = request.body;
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const findHour = await scheduleRepository.findOneBy({ hour: payload.hour });
  const dayOfWeek = new Date(payload.date).getDay();
  if (payload.hour < "08:00" || payload.hour > "18:00") {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  if (findHour) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  return next();
};
