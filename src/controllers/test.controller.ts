import { Request, Response } from "express";

export function testPersonVisitCity(req: Request, res: Response): Response {

  console.log(`url ${(req.baseUrl + req.url).padEnd(25)} invoked ${testPersonVisitCity.name}`);
  
  const personsWithCity = [{
    id: '1',
    name: 'Alice',
    city: 'Amsterdam',
    lastVisit: '2024-01-01'
  }, {
    id: '2',
    name: 'Bob',
    city: 'Berlin',
    lastVisit: '2024-02-01'
  }, {
    id:'3',
    name: 'Carol',
    city: 'Copenhagen',
    lastVisit: '2024-03-01'
  }, {
    id:'4',
    name: 'David',
    city: 'Dublin',
    lastVisit: '2024-04-01'
  }]

  return res.json(personsWithCity); 
}