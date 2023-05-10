import { Request, Response } from "express";

export const createdUserController = async (request:Request,response:Response):Promise<Response> => {
  const payload = request.body
  
  return response.status(201).json()
};
