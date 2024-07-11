import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log(`url ${(req.baseUrl + req.url).padEnd(25)} invoked ${welcome.name}`);

  return res.json({ message: "Welcome to Memoria application. For testing use api/test." });
}