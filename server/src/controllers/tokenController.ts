import { IUser } from "@src/models/User";
import Jwt from "jsonwebtoken";

const generateAccessToken = (user: IUser) => {
  return Jwt.sign(
    {
      name: user.name,
      username: user.username,
      password: user.password,
      role: user.role
    },
    "mySecretKey",
    {
      expiresIn: "7d"
    }
  );
};

const generateRefreshToken = (user: IUser) => {
  return Jwt.sign(
    {
      name: user.name,
      username: user.username,
      password: user.password,
      role: user.role
    },
    "myRefreshSecretKey"
  );
};

const decodedToken = async (token: string) => {
  console.log("token ::", token);

  try {
    return await Jwt.verify(token, "mySecretKey");
  } catch (error) {
    return error;
  }
};

export default {
  generateAccessToken,
  generateRefreshToken,
  decodedToken
} as const;
