import * as bodyParser from "body-parser";
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { TaskController } from "./controller/task.controller";
import Routes from "./routes/routes";

class App {
  public express: express.Application;
  public logger: APILogger;
  public taskController: TaskController;

  constructor() {
    this.middleware();
    this.routes();
    this.logger = new APILogger();
  }

  // config express middleware
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.get("/", (req, res, next) => {
      res.send("Typescript App works!!");
    });

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });

    // task route
    this.express.use("/api", Routes);
  }
}
export default new App().express;
