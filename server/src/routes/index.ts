import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "../common/Paths";
import RestoRoutes from "./RestoRoutes";
import LoginRoutes from "./LoginRoutes";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

/**
 *  Restaurants
 */
const restoRouter = Router();

/**
 *  Login
 */
const signinRouter = Router();

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

// Find user
signinRouter.post(Paths.Login.Signin, LoginRoutes.signin);

// Add RestoRouter
apiRouter.use(Paths.Restaurants.Base, restoRouter);

// Add LoginRouter
apiRouter.use(Paths.Login.Base, signinRouter);

// **** Export default **** //

export default apiRouter;
