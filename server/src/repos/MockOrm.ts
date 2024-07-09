import jsonfile from "jsonfile";
import { IResto } from "@src/models/Resto";

// **** Variables **** //

const DB_FILE_NAME = "database.json";

// **** Types **** //

interface IRestoDB {
  resto: IResto[];
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

// **** Export default **** //

export default {
  openRestoDB,
  saveRestoDB
} as const;
