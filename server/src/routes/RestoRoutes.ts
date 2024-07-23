import HttpStatusCodes from "@src/common/HttpStatusCodes";
import { IRestaurant, IResto } from "@src/models/Resto";
import { IRes } from "@src/routes/types/express/misc";
import { IReq } from "@src/routes/types/types";
import RestoService from "@src/services/RestoService";

// **** functions **** //
/**
 * Get all Resto
 */

const getAllResto = async (_: IReq, res: IRes) => {
  const resto = await RestoService.getAll();
  return res.status(HttpStatusCodes.OK).json({ resto });
};

/**
 *  Add new Resto
 */

const addResto = async (req: IReq<{ restaurant: IRestaurant }>, res: IRes) => {
  const { restaurant } = req.body;
  try {
    await RestoService.addResto(restaurant);
    return res
      .status(HttpStatusCodes.CREATED)
      .json({ message: "Successfully created !" });
  } catch (error) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ message: "Bad Request" });
  }
};

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const restoId = req.params.id;
  await RestoService.deleteResto(restoId);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 *  Filter Resto
 */
const filter_ = async (
  req: IReq<{ key: string; value: string }>,
  res: IRes
) => {
  const restoFilterParams = req.body;
  const restoData = await RestoService.filterResto(restoFilterParams);
  return res.status(HttpStatusCodes.OK).json({ restoData });
};

/**
 *  @desc get resto by tag
 */

const getRestoByTag = async (req: IReq, res: IRes) => {
  const tagId = req.params.tag;
  try {
    const resp = await RestoService.getRestoByTag(tagId);
    return res.status(HttpStatusCodes.OK).json({ resp });
  } catch (error) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error });
  }
};

// **** export default **** //
export default {
  getAllResto,
  addResto,
  getRestoByTag,
  deleteResto: delete_,
  filterResto: filter_
} as const;
