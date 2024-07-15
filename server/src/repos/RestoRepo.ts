import { IResto } from "@src/models/Resto";
import MockOrm from "./MockOrm";

// ** Function ** //

// Add New Restaurant
const addResto = async (resto: IResto): Promise<void> => {
  const db = await MockOrm.openRestoDB();
  db.resto.push(resto);
  return MockOrm.saveRestoDB(db);
};

/**
 *  Get all Resto
 */
const getAllResto = async (): Promise<IResto[]> => {
  const db = await MockOrm.openRestoDB();
  return db.resto;
};
/**
 * See if a resto with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await MockOrm.openRestoDB();
  for (const user of db.resto) {
    if (user.restoId === id) {
      return true;
    }
  }
  return false;
}
/**
 * Delete one Resto.
 */
async function delete_(id: string): Promise<void> {
  const db = await MockOrm.openRestoDB();
  for (let i = 0; i < db.resto.length; i++) {
    if (db.resto[i].restoId === id) {
      db.resto.splice(i, 1);
      console.log("found");
      return MockOrm.saveRestoDB(db);
    }
  }
}
/**
 *  Search/Filter Resto
 */
async function filter_(params: {
  key: string;
  value: string;
}): Promise<IResto[]> {
  const db = await MockOrm.openRestoDB();
  const filteredRestoData = db.resto.filter((resto) => {
    if (resto.basicDetails.name.includes(params.value)) {
      return resto;
    }
  });
  return filteredRestoData;
}

// **** Export default **** //

export default {
  addResto,
  getAllResto,
  persists,
  deleteResto: delete_,
  filterResto: filter_
} as const;
