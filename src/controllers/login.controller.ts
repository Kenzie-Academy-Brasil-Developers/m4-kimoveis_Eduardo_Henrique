import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { createTokenService } from "../services/createToken.service";

export const loginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload: TLoginRequest = request.body;
  const token: string = await createTokenService(payload);
  return response.status(200).json({ token });
};
