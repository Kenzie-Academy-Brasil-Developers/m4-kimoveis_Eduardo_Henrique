import { z } from "zod";
import { allUsersSchemaResponse, userSchemaRequest, userSchemaResponse, userUpdateSchemaRequest } from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

export type TUserRequest = z.infer<typeof userSchemaRequest>
export type TUserResponse = z.infer<typeof userSchemaResponse>
export type TUsersResponse = z.infer<typeof allUsersSchemaResponse>
export type TUserUpdateRequest = DeepPartial<TUserRequest>