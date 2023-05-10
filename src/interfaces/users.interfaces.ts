import { z } from "zod";
import { allUsersSchemaResponse, userSchemaRequest, userSchemaResponse } from "../schemas/users.schemas";

export type TUserRequest = z.infer<typeof userSchemaRequest>
export type TUserResponse = z.infer<typeof userSchemaResponse>
export type TUsersResponse = z.infer<typeof allUsersSchemaResponse>