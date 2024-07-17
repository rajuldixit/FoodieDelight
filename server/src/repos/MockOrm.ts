import jsonfile from "jsonfile";
import { IResto } from "@src/models/Resto";
import { IUser } from "@src/models/User";

// **** Variables **** //

const DB_FILE_NAME = "database.json";

// **** Types **** //

interface IRestoDB {
  resto: IResto[];
}

interface IUserDB {
  user: IUser[];
}

// **** Functions **** //

/**
 * Fetch json from the resto file
 */

const openRestoDB = (): Promise<IRestoDB> => {
  return jsonfile.readFile(__dirname + "/" + DB_FILE_NAME) as Promise<IRestoDB>;
};
const saveRestoDB = (db: IRestoDB): Promise<void> => {
  return jsonfile.writeFile(__dirname + "/" + DB_FILE_NAME, db);
};

//** fetch the user */
const openUserDB = (): Promise<IUserDB> => {
  return jsonfile.readFile(__dirname + "/" + DB_FILE_NAME) as Promise<IUserDB>;
};

// **** Export default **** //

export default {
  openRestoDB,
  saveRestoDB,
  openUserDB
} as const;
