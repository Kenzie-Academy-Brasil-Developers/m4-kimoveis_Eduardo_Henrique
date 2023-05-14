import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const ensureCategoryExistById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idCategory = Number(request.params.id)
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const findCategory = await categoryRepository.findOne({
    where: { id: idCategory },
  });
  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }
  return next();
};
