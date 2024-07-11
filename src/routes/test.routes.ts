import { Router } from "express";
import { testPersonVisitCity } from "../controllers/test.controller.js";

class TestRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", testPersonVisitCity);
  }
}

export default new TestRoutes().router;