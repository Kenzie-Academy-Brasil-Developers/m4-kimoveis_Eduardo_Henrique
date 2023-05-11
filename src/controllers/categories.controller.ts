import { Request, Response } from "express";
import { createdCategoryService } from "../services/categories/createCategories.service";
import { TCategoryRequest, TCategoryResponse } from "../interfaces/categories.interfaces";
import { listAllCategoriesService } from "../services/categories/listAllCategories.service";

export const createCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload: TCategoryRequest = request.body
  const newCategory: TCategoryResponse = await createdCategoryService(payload)
  return response.status(201).json(newCategory)
};
export const listAllCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categories = await listAllCategoriesService()
  return response.status(200).json(categories)
}