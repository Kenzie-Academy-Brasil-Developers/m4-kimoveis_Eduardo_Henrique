import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate.controller";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { realEstateRequest} from "../schemas/realEstate.schemas";

export const  realEstateRoutes:Router = Router()
realEstateRoutes.post("",ensureValidateBody(realEstateRequest),createRealEstateController)