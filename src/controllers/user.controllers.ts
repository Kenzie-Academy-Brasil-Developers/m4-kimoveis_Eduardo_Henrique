import { Request, Response } from "express";
import { createdUserService } from "../services/createUser.service";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";

export const createdUserController = async (request:Request,response:Response):Promise<Response> => {
  const payload = request.body
  console.log(request.body)
  const newUser:TUserResponse = await createdUserService(payload)
  return response.status(201).json(newUser)
};
