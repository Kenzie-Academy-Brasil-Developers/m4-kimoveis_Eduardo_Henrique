import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";
import { TUserRequest } from "../interfaces/users.interfaces";

export const ensureEmailExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const newUser: TUserRequest = request.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUserByEmail = await userRepository.findOne({
    where: { email: newUser.email.toLocaleLowerCase() },
  });
  console.log("USUARIO NOVO",newUser)
  console.log("USUARIO COM MESMO EMAIL",findUserByEmail)
  if (findUserByEmail) {
    throw new AppError("Email already exist", 409);
  } else {
    return next();
  }
};
