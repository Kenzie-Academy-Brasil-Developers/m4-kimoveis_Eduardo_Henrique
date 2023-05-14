import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { Schedule } from "../entities";

export const ensureScheduleRealEstateExist = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //fazer a busca do realEstate e retornar um array de users
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateId = request.body.realEstateId;

  const findUser = await scheduleRepository
    .createQueryBuilder("schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("schedules.realEstate = :realEstateId", { realEstateId })
    
    .getOne();
  if (findUser) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }
  return next();
};
