import { Request, Response } from "express";
import { TUserResponse } from "../interfaces/users.interfaces";
import { NextFunction } from "connect";
import { createdUserService } from "../services/users/createUser.service";
import { listAllUsersService } from "../services/users/listAllUsers.service";
import { updateUsersService } from "../services/users/updateUsers.service";
import { deleteUserService } from "../services/users/deleteUser.service";

export const createdUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload = request.body;
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
export const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = Number(request.params.id);
  const payload = request.body;
  const updatedUser = await updateUsersService(payload, id);
  return response.status(200).json(updatedUser);
};
export const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = Number(request.params.id);
  await deleteUserService(id);
  return response.status(204).json();
};
