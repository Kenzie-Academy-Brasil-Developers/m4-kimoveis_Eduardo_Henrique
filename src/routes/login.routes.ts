import { Router } from "express";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { loginSchema } from "../schemas/login.schemas";
import { loginController } from "../controllers/login.controller";

export const loginRoutes: Router = Router();
  loginRoutes.post("",ensureValidateBody(loginSchema),loginController)
