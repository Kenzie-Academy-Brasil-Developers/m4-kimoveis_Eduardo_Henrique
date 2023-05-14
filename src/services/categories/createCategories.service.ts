import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { categoriesSchemaResponse } from "../../schemas/categories.schemas";
import {
  TCategoryRequest,
  TCategoryResponse,
} from "../../interfaces/categories.interfaces";

export const createdCategoryService = async (
  payload: TCategoryRequest
): Promise<TCategoryResponse> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const newCategory = categoryRepository.create(payload);
  await categoryRepository.save(newCategory);
  const returnCategory: TCategoryResponse =
    categoriesSchemaResponse.parse(newCategory);

  return returnCategory;
};
