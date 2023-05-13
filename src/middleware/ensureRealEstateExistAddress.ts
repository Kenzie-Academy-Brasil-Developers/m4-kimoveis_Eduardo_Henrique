import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { error } from "console";
import { AppError } from "../error";

export const ensureRealEstateExistAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const newZipCode = request.body.address.zipCode;

  const addressEstateRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const findZipCode = await addressEstateRepository.findOneBy({
    zipCode: newZipCode,
  });
  if(findZipCode){
    throw new AppError("Address already exists",409)
  }

  return next();
};
