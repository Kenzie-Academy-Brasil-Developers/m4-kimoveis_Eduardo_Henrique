import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { TRealEstatesResponse } from "../../interfaces/realEstate.interface";
import { realEstatesSchemaResponse } from "../../schemas/realEstate.schemas";

export const listRealEstate = async (): Promise<TRealEstatesResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = await realEstateRepository
    .createQueryBuilder("real_estate")
    .leftJoinAndSelect("real_estate.address", "address")
    .getMany();
  const returnRealEstate: TRealEstatesResponse =
    realEstatesSchemaResponse.parse(realEstate);
  console.log(realEstate);
  return returnRealEstate;
};
