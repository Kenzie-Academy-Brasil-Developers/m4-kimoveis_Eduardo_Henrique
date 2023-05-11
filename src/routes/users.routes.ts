import { Router } from "express";
import {
  createdUserController,
  deleteUserController,
  listAllUsersController,
  updateUserController,
} from "../controllers/user.controller";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import {
  userSchemaRequest,
  userUpdateSchemaRequest,
} from "../schemas/users.schemas";
import { ensureEmailExists } from "../middleware/ensureEmailExists";
import { ensureTokenIsValid } from "../middleware/ensureTokenIsValid";
import { ensureValidPermission } from "../middleware/ensureValidPermission";
import { ensureIdExists } from "../middleware/ensureIdExists";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureValidateBody(userSchemaRequest),
  ensureEmailExists,
  createdUserController
);
usersRoutes.get(
  "",
  ensureTokenIsValid,
  ensureValidPermission,
  listAllUsersController
);
usersRoutes.patch(
  "/:id",
  ensureIdExists,
  ensureTokenIsValid,
  ensureValidPermission,
  ensureValidateBody(userUpdateSchemaRequest),
  ensureEmailExists,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureIdExists,
  ensureTokenIsValid,
  ensureValidPermission,
  deleteUserController
);
