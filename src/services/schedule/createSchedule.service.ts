import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { scheduleSchema } from "../../schemas/schedules.schemas";
import { TScheduleResponse } from "../../interfaces/schedule.interface";

export const createScheduleService = async (
  payload: any,
  idUser: number
): Promise<TScheduleResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const realRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const findUser = await userRepository.findOneBy({ id: idUser });

  const findRealEstate = await realRepository.findOneBy({
    id: payload.realEstateId,
  });

  const createSchedule = scheduleRepository.create({
    ...payload,
    realEstate: findRealEstate,
    user: findUser,
  });
  const schedule = await scheduleRepository.save(createSchedule);

  const returnSchedule: TScheduleResponse = scheduleSchema.parse(schedule);

  return returnSchedule;
};
