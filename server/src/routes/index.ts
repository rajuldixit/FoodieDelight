import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "../common/Paths";
import RestoRoutes from "./RestoRoutes";
import LoginRoutes from "./LoginRoutes";
import TagRoutes from "./TagRoutes";

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

/**
 *  Tags
 */
const tagRouter = Router();
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

// search resto
restoRouter.post(Paths.Restaurants.Search, RestoRoutes.filterResto);

// get resto by tag
restoRouter.get(Paths.Restaurants.GetRestoByTag, RestoRoutes.getRestoByTag);

// Find user
signinRouter.post(Paths.Login.Signin, LoginRoutes.signin);

// Add Tag
tagRouter.post(Paths.Tags.Add, TagRoutes.addTag);

// Add RestoRouter
apiRouter.use(Paths.Restaurants.Base, restoRouter);

// Add LoginRouter
apiRouter.use(Paths.Login.Base, signinRouter);

// Add TagRouter
apiRouter.use(Paths.Tags.Base, tagRouter);

// **** Export default **** //

export default apiRouter;
