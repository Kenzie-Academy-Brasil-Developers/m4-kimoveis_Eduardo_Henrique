import { Repository } from "typeorm";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

export const updateUsersService = async (
  payload: TUserUpdateRequest,
  userId: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  await userRepository.update(userId, { ...payload });

  const user = await userRepository.findOne({ where: { id: userId } });

  const returnUser: TUserResponse = userSchemaResponse.parse(user);
  return returnUser;
};
