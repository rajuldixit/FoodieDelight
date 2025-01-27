/**
 * Setup express server.
 */

import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import express, { Request, Response, NextFunction } from "express";
import logger from "jet-logger";

import "express-async-errors";

import BaseRouter from "@src/routes";

import Paths from "@src/common/Paths";
import EnvVars from "@src/common/EnvVars";
import HttpStatusCodes from "@src/common/HttpStatusCodes";
import RouteError from "@src/common/RouteError";
import { NodeEnvs } from "@src/common/misc";
import RestoRoutes from "./routes/RestoRoutes";
import LoginRoutes from "./routes/LoginRoutes";

const cors = require("cors");
// **** Variables **** //

const app = express();

// **** Setup **** //

// Basic middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.CookieProps.Secret));

app.use(cors());

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan("dev"));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// Add error handler
app.use(
  (
    err: Error,
    _: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) => {
    if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
      logger.err(err, true);
    }
    let status = HttpStatusCodes.BAD_REQUEST;
    if (err instanceof RouteError) {
      status = err.status;
    }
    return res.status(status).json({ error: err.message });
  }
);

// Set views directory (html)
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

// Set static directory (js and css).
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

app.use("api/resto/getAll", (_: Request, res: Response) => {
  return RestoRoutes.getAllResto(_, res);
});
app.use("api/resto/addResto", (req: Request, res: Response) => {
  return RestoRoutes.addResto(req, res);
});

app.use("api/resto/deleteResto/:id", (req: Request, res: Response) => {
  return RestoRoutes.deleteResto(req, res);
});
///resto/search
app.use("api/resto/search", (req: Request, res: Response) => {
  return RestoRoutes.filterResto(req, res);
});

app.use("api/user/signin", (req: Request, res: Response) => {
  console.log("in api signin");
  return LoginRoutes.signin(req, res);
});

// **** Export default **** //

export default app;
