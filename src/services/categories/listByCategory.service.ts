import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { TRealEstateCategorySchema } from "../../interfaces/realEstate.interface";
import { realEstateCategorySchema } from "../../schemas/realEstate.schemas";

export const listByCategoryService = async (
  idParams: number
): Promise<TRealEstateCategorySchema> => {
  const realRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
    console.log("Sou a idParams", idParams);
  const realEstate = await realRepository
    .createQueryBuilder("realEstate")
    .innerJoinAndSelect("realEstate.category", "category")
    .where("category.id = :idParams", { idParams })
    .getMany();
    
  console.log("Sou o realEstate", realEstate);
  const returnRealEstate = realEstateCategorySchema.parse({
    category: realEstate[0].category,
    realEstate,
  });
  console.log("sou o retorno",returnRealEstate)
  return returnRealEstate;
};
