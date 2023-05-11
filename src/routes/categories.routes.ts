import { Router } from "express";
import {
  createCategoriesController,
  listAllCategoriesController,
} from "../controllers/categories.controller";
import { ensureNameCategoryExists } from "../middleware/ensureNameCategoryExists";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { categoriesSchemaRequest } from "../schemas/categories.schemas";
import { ensureTokenIsValid } from "../middleware/ensureTokenIsValid";
import { ensureValidPermission } from "../middleware/ensureValidPermission";

export const categoriesRoutes: Router = Router();
categoriesRoutes.post(
  "",
  ensureTokenIsValid,
  ensureValidateBody(categoriesSchemaRequest),
  ensureNameCategoryExists,
  ensureValidPermission,
  createCategoriesController
);
categoriesRoutes.get("", listAllCategoriesController);
