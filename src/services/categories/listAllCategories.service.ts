import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCategoriesResponse } from "../../interfaces/categories.interfaces";
import { allCategoriesSchemasResponse } from "../../schemas/categories.schemas";

export const listAllCategoriesService =
  async (): Promise<TCategoriesResponse> => {
    const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);
      
    const allCategories = await categoryRepository.find();

    const returnCategories: TCategoriesResponse =
      allCategoriesSchemasResponse.parse(allCategories);

    return returnCategories;
  };
