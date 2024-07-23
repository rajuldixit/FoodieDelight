import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "@src/common/EnvVars";
import server from "./server";
import connectMongoDB from "./db/config";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

server.listen(EnvVars.Port, () => {
  connectMongoDB();
  logger.info(SERVER_START_MSG);
});
