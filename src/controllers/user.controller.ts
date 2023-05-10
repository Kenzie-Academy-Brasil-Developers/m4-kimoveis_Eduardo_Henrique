import { Request, Response } from "express";
import { createdUserService } from "../services/createUser.service";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import { NextFunction } from "connect";
import { listAllUsersService } from "../services/listAllUsers.service";

export const createdUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload = request.body;
  console.log(request.body);
  const newUser: TUserResponse = await createdUserService(payload);
  return response.status(201).json(newUser);
};
export const listAllUsersController = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> => {
  const users = await listAllUsersService();

  return response.status(200).json(users);
};
