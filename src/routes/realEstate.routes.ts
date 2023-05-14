import { Router } from "express";
import { ensureValidateBody } from "../middleware/ensureValidateBody";
import { realEstateRequest } from "../schemas/realEstate.schemas";
import { createRealEstateController, listRealEstateController } from "../controllers/realEstate.controller";
import { ensureValidPermission } from "../middleware/ensureValidPermission";
import { ensureTokenIsValid } from "../middleware/ensureTokenIsValid";
import { ensureRealEstateExistAddress } from "../middleware/ensureRealEstateExistAddress";

export const realEstateRoutes: Router = Router();
realEstateRoutes.post(
  "",
  ensureTokenIsValid,
  ensureValidPermission,
  ensureValidateBody(realEstateRequest),
  ensureRealEstateExistAddress,
  createRealEstateController
);
realEstateRoutes.get("",listRealEstateController)