import { NextFunction } from "connect";
import { Request, Response } from "express";
import { AppError } from "../error";

export const ensureValidPermission = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idUserParams: number = Number(request.params.id);
  const admin: boolean = response.locals.isAdmin;
  const idUser: number = Number(response.locals.idUser);
  if (admin) {
    return next();
  } else if (idUser === idUserParams) {
    return next();
  }
  throw new AppError("Insufficient permission", 403);
};
