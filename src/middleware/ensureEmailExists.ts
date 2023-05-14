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
    where: { email: newUser.email },
  });
  if (newUser.email) {
    if (findUserByEmail) {
      throw new AppError("Email already exists", 409);
    }
  }
  return next();
};
