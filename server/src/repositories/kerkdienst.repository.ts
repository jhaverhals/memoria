import {connectionPool} from '../db/mysql';
import Kerkdienst from '../models/kerkdienst.model';
import {OkPacketParams} from 'mysql2';

interface IKerkdienstRepository {
  retrieveAll(): Promise<Kerkdienst[]>;
  // retrieveAll(searchParams: {date: Date}): Promise<Kerkdienst[]>;
  // retrieveById(kerkdienstId: number): Promise<Kerkdienst | undefined>;
  // save(kerkdienst: Kerkdienst): Promise<Kerkdienst>;
  // update(kerkdienst: Kerkdienst): Promise<number>;
  // delete(kerkdienstId: number): Promise<number>;
}

class KerkdienstRepository implements IKerkdienstRepository {
  retrieveAll(): Promise<Kerkdienst[]> {
    let query: string = 'SELECT * FROM kerkdienst';

    return new Promise((resolve, reject) => {
      connectionPool.query<Kerkdienst[]>(query, (err: any, res: Kerkdienst[] | PromiseLike<Kerkdienst[]>) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  // retrieveAllDate(searchParams: {date?: Date}): Promise<Kerkdienst[]> {
  //   let query: string = "SELECT * FROM kerkdienst";
  //   let condition: string = "";

  //   if (searchParams?.date)
  //     condition += `date = '%${searchParams.date}%'`

  //   if (condition.length)
  //     query += " WHERE " + condition;

  //   return new Promise((resolve, reject) => {
  //     mysqlPool.execute<Kerkdienst[]>(query, (err: any, res: Kerkdienst[] | PromiseLike<Kerkdienst[]>) => {
  //     if (err) reject(err);
  //     else resolve(res);
  //     });
  //   });
  //   }

  // save(kerkdienst: Kerkdienst): Promise<Kerkdienst> {
  //   return new Promise((resolve, reject) => {
  //     mysqlPool.execute<OkPacketParams>(
  //     "INSERT INTO kerkdienst (dateTime, notities) VALUES(?,?)",
  //     [kerkdienst.date, kerkdienst.notities],
  //     (err, res) => {
  //       if (err) reject(err);
  //       else
  //       this.retrieveById(res.insertId)
  //         .then((kerkdienst) => resolve(kerkdienst!))
  //         .catch(reject);
  //     }
  //     );
  //   });
  //   }
  //   retrieveById(kerkdienstId: number): Promise<Kerkdienst> { }

  //   update(kerkdienst: Kerkdienst): Promise<number> { }

  //   delete(kerkdienstId: number): Promise<number> { }
}

export default new KerkdienstRepository();
