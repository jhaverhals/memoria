import { Router } from "express";
import KerkdienstController from "../controllers/kerkdienst.controller";

class KerkdienstRoutes {
  router = Router();
  controller = new KerkdienstController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.controller.findAll);
    this.router.get('/:id', this.controller.findOne);
  }
}

export default new KerkdienstRoutes().router;