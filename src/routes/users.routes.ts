import { Router } from "express";
import { createdUserController } from "../controllers/user.controllers";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { userSchemaRequest } from "../schemas/users.schemas";
import { ensureEmailExists } from "../middleware/ensureEmailExists";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureValidateBody(userSchemaRequest),
  ensureEmailExists,
  createdUserController
);
