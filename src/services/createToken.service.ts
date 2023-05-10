import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { TLoginRequest } from "../interfaces/login.interfaces";

export const createTokenService = async (
  payload: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: { email: payload.email },
  });
  console.log(user);
  if (!user) {
    throw new AppError("Wrong email/password", 401);
  }

  const passwordValidate: boolean = await compare(
    payload.password,
    user.password
  );
  console.log(passwordValidate);
  
  if (!passwordValidate) {
    throw new AppError("Wrong email/password", 401);
  }

  const token = sign(
    {
      isAdmin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );
  return token;
};
