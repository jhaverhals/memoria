import {Request, Response} from "express";
import Kerkdienst from "../models/kerkdienst.model.js";
import kerkdienstRepository from "../repositories/kerkdienst.repository.js";

export default class KerkdienstController {
  async findAll(req: Request, res: Response) {

    console.log(`url ${(req.baseUrl + req.url).padEnd(25)} invoked KerkdienstController.findAll`);

    try {
      const kerkdiensten = await kerkdienstRepository.retrieveAll();
      console.log(kerkdiensten);
      console.log('--> sup');

      res.status(200).send(kerkdiensten);
    } catch (err) {
      console.log('-----------error: ');
      console.log(err);

      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findOne(req: Request, res: Response) {

    console.log(`url ${(req.baseUrl + req.url).padEnd(25)} invoked KerkdienstController.findOne`);

    try {
      res.status(200).json({
        message: "findOne OK",
        reqParamId: req.params.id
      });
    } catch (err) {
        res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}