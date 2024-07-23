import HttpStatusCodes from "@src/common/HttpStatusCodes";
import RouteError from "@src/common/RouteError";
import { IRestaurant, IRestaurantsByTag, IResto } from "@src/models/Resto";
import RestoRepo from "@src/repos/RestoRepo";

// **** Variables **** //

export const RESTO_NOT_FOUND_ERR = "Resto not found";

// **** Functions **** //
/**
 *  Get all resto
 */

const getAll = (): Promise<IResto[]> => {
  return RestoRepo.getAllResto();
};

const addResto = (resto: IRestaurant): Promise<object | string> => {
  return RestoRepo.addResto(resto);
};

/**
 * Delete a user by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await RestoRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, RESTO_NOT_FOUND_ERR);
  }
  // Delete Resto
  return RestoRepo.deleteResto(id);
}

/**
 *  Filter resto data
 */
const _filter = async (params: {
  key: string;
  value: string;
}): Promise<IResto[]> => {
  if (!!!params) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, RESTO_NOT_FOUND_ERR);
  }
  return RestoRepo.filterResto(params);
};

/**
 *  @desc get resto by tag
 */
const getRestoByTag = async (
  params: string
): Promise<IRestaurantsByTag[] | string> => {
  if (!!!params) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, RESTO_NOT_FOUND_ERR);
  }
  return RestoRepo.getRestoByTag(params);
};
// Export Default

export default {
  getAll,
  addResto,
  getRestoByTag,
  deleteResto: _delete,
  filterResto: _filter
} as const;
