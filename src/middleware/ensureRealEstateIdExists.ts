import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

export const ensureRealEstateIdExist = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idReal = request.body.realEstateId;
  const realRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const findRealEstate = await realRepository.findOne({
    where: { id: idReal },
  });
  if (!findRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  return next();
};
