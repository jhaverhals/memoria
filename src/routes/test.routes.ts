import { Router } from "express";
import { testPersonVisitCity } from "../controllers/test.controller";

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