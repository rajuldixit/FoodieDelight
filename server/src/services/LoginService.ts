import HttpStatusCodes from "@src/common/HttpStatusCodes";
import RouteError from "@src/common/RouteError";
import { IUser } from "@src/models/User";
import UserRepo from "@src/repos/UserRepo";

const USER_NOT_FOUND_ERR = "User not found";

const signin = async (params: {
  username: string;
  password: string;
}): Promise<{
  user: IUser;
  accessToken: string;
  refreshToken: string;
} | null> => {
  if (!!!params) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, USER_NOT_FOUND_ERR);
  }
  return await UserRepo.findUser(params);
};

/** export default */

export default { signin } as const;
