import { NextFunction } from "connect";
import { Request, Response } from "express";
import { AppError } from "../error";

export const ensureValidPermission =async(request:Request,response:Response,next:NextFunction)=>{
  const admin = response.locals.isAdmin
  if(!admin){
    throw new AppError("Insufficient permission",403)
  }
  return next()
}