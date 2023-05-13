import { Repository } from "typeorm";
import {
  TRealEstateRequest,
  TRealEstateResponse,
  
} from "../../interfaces/realEstate.interface";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import {  realEstateSchema } from "../../schemas/realEstate.schemas";

export const createRealEstateService = async (
  payload: TRealEstateRequest,
  idCategory: number
): Promise<TRealEstateResponse> => {
  const realRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOneBy({ id: idCategory });
  const realWithOutAddress = payload;

  const newAddress = addressRepository.create(payload.address);

  const createRealEstate: TRealEstateResponse = realRepository.create({
    value:payload.value,
    size:payload.size,
    address: newAddress,
    category: findCategory!,
  });
  const newRealEstate:any = await realRepository.save(createRealEstate);
  
  const returnRealEstate: TRealEstateResponse =
  realEstateSchema.parse(newRealEstate);

  return returnRealEstate;
};
