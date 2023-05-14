import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { realEstateWithSchedulesSchema } from "../../schemas/schedules.schemas";
import { TSchedulesWithRealEstateResponse } from "../../interfaces/schedule.interface";

export const listScheduleService = async (idParams: number) => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findUser = await scheduleRepository
    .createQueryBuilder("schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("schedules.realEstateId = :idParams", { idParams })
    .getOne();

  const findSchedules = await realEstateRepository
    .createQueryBuilder("real_estate")
    .leftJoinAndSelect("real_estate.address", "address")
    .leftJoinAndSelect("real_estate.category", "category")
    .innerJoinAndSelect("real_estate.schedules", "schedules")
    .where("real_estate.id = :idParams", { idParams })
    .getOne();
  const returnSchedule: TSchedulesWithRealEstateResponse =
    realEstateWithSchedulesSchema.parse({
      ...findUser,
      ...findSchedules,
    });
  return returnSchedule;
};
