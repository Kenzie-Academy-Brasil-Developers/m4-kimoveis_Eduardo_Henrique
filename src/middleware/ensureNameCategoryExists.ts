import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const ensureNameCategoryExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const category = request.body;
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const findCategory = await categoryRepository.findOne({
    where: { name: category.name },
  });
  if (findCategory) {
    throw new AppError("Category already exists", 409);
  }
  return next();
};
