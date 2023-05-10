import { z } from "zod";
import { userSchemaRequest, userSchemaResponse } from "../schemas/users.schemas";

export type TUserRequest = z.infer<typeof userSchemaRequest>
export type TUserResponse = z.infer<typeof userSchemaResponse>