import * as express from "express";
import * as bodyParser from "body-parser";
import { APILogger } from "../logger/api.logger";
import { TaskController } from "./../controller/task.controller";

class Routes {
  public express: express.Application;
  public logger: APILogger;
  public taskController: TaskController;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new APILogger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // task routes
    this.express.get("/tasks", (req, res) => {
      this.taskController.getTasks().then((data) => res.json(data));
    });

    this.express.post("/task", (req, res) => {
      console.log(req.body);
      this.taskController
        .createTask(req.body.task)
        .then((data) => res.json(data));
    });

    this.express.put("/task", (req, res) => {
      this.taskController
        .updateTask(req.body.task)
        .then((data) => res.json(data));
    });

    this.express.delete("/task/:id", (req, res) => {
      this.taskController
        .deleteTask(req.params.id)
        .then((data) => res.json(data));
    });
  }
}

export default new Routes().express;
