import { NextFunction } from "connect";
import { Request, Response } from "express";
import { AppError } from "../error";

export const ensureValidPermission = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idUserParams: number = Number(request.params.id);
  const idUser: number = Number(response.locals.idUser);
  const admin: boolean = response.locals.isAdmin;
  if (admin) {
    return next();
  }
  if (idUser === idUserParams) {
    return next();
  }
  throw new AppError("Insufficient permission", 403);
};
