import { Router } from "express";
import { createdUserController, listAllUsersController } from "../controllers/user.controller";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { userSchemaRequest } from "../schemas/users.schemas";
import { ensureEmailExists } from "../middleware/ensureEmailExists";
import { ensureTokenIsValid } from "../middleware/ensureTokenIsValidMiddleware";
import { ensureValidPermission } from "../middleware/ensureValidPermissionMiddleware";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureValidateBody(userSchemaRequest),
  ensureEmailExists,
  createdUserController
);
usersRoutes.get("",ensureTokenIsValid,ensureValidPermission,listAllUsersController)
