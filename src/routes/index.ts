import { Application } from "express";
import homeRoutes from "./home.routes.js";
import testRoutes from "./test.routes.js";
import kerkdienstRoutes from "./kerkdienst.routes.js";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/test", testRoutes);
    app.use("/api/kerkdienst", kerkdienstRoutes);
  }
}