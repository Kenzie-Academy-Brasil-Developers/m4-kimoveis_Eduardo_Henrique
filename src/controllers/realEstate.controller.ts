import { Request, Response } from "express";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";
import { TRealEstateRequest } from "../interfaces/realEstate.interface";
import { listRealEstate } from "../services/realEstate/listRealEstate.service";

export const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload: TRealEstateRequest = request.body;
  const category: number = request.body.categoryId;
  const newRealEstate = await createRealEstateService(payload, category);
  return response.status(201).json(newRealEstate);
};

export const listRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allRealEstate = await listRealEstate()
  return response.status(200).json(allRealEstate);
}
