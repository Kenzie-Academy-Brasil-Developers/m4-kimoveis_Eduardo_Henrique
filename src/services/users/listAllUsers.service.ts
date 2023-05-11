import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { allUsersSchemaResponse } from "../../schemas/users.schemas";

export const listAllUsersService = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const returnUsers: TUsersResponse = allUsersSchemaResponse.parse(users);

  return returnUsers;
};
