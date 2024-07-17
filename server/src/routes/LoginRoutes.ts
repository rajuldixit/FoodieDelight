import HttpStatusCodes from "@src/common/HttpStatusCodes";
import { IRes } from "@src/routes/types/express/misc";
import { IReq } from "@src/routes/types/types";
import LoginService from "@src/services/LoginService";

const USER_NOT_FOUND = "USer not found";

/**
 * Signin
 */
const signin = async (
  req: IReq<{ username: string; password: string }>,
  res: IRes
) => {
  const signinParams = req.body;
  console.log("signin ---", signinParams);
  const user = await LoginService.signin(signinParams);
  console.log("user :::", user);
  !!user
    ? res.status(HttpStatusCodes.OK).json({ user })
    : res.status(HttpStatusCodes.NOT_FOUND).json({ message: USER_NOT_FOUND });
};

//** export default */

export default {
  signin
} as const;
