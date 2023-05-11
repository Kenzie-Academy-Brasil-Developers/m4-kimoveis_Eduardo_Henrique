import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";

export const ensureIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idUser: number = Number(request.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUserById = await userRepository.findOne({
    where: { id: idUser },
  });

  if (!findUserById) {
    throw new AppError("User not found", 404);
  } else {
    return next();
  }
};
