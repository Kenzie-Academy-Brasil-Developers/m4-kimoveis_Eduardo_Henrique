import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import {  userSchemaResponse } from "../schemas/users.schemas";

export const createdUserService = async (
  payload: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const newUser = userRepository.create(payload);
  await userRepository.save(newUser);
  const returnUser = userSchemaResponse.parse(newUser);
 
  return returnUser;
};
