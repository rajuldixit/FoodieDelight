import { IUser } from "@src/models/User";
import MockOrm from "./MockOrm";
import tokenController from "@src/controllers/tokenController";

/**
 * function
 */

const findUser = async (params: {
  username: string;
  password: string;
}): Promise<{
  user: IUser;
  accessToken: string;
  refreshToken: string;
} | null> => {
  const db = await MockOrm.openUserDB();
  const user = db.user.filter((user) => {
    if (
      user.password === params.password &&
      user.username === params.username
    ) {
      return user;
    }
  });
  if (user[0]) {
    const accessToken = tokenController.generateAccessToken(user[0]);
    const refreshToken = tokenController.generateRefreshToken(user[0]);

    return {
      user: user[0],
      accessToken,
      refreshToken
    };
  } else {
    return null;
  }
};

/** export default */

export default { findUser } as const;
