import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "../common/Paths";
import RestoRoutes from "./RestoRoutes";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

/**
 *  Restaurants
 */
const restoRouter = Router();

// Get all Resto

restoRouter.get(Paths.Restaurants.Get, RestoRoutes.getAllResto);

// add one resto

restoRouter.post(Paths.Restaurants.Add, RestoRoutes.addResto);

// Delete one user
restoRouter.delete(
  Paths.Restaurants.Delete,
  validate(["id", "string", "params"]),
  RestoRoutes.deleteResto
);

// Delete one user
restoRouter.post(Paths.Restaurants.Search, RestoRoutes.filterResto);

// Add RestoRouter
apiRouter.use(Paths.Restaurants.Base, restoRouter);

// **** Export default **** //

export default apiRouter;
