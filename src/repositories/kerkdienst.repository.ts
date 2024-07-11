import mysqlPool, {connection, getKerkdiensten} from "../db/mysql.js";
import Kerkdienst from "../models/kerkdienst.model.js";
import { OkPacketParams } from "mysql2";

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

    let query: string = "SELECT * FROM kerkdienst";  

    return new Promise((resolve, reject) => {
      console.log('x 1');

      mysqlPool.execute<Kerkdienst[]>(query, (err: any, elements: any) => {
        console.log('$$ ');
        console.log(err);
        console.log('@@ ');
        console.log(elements);
         
        if (err) reject(err);
        else resolve(elements);
      });
        // .then( result => {
        //   console.log('x 2');
        //   console.log(result);
        //   reject();
        //   // resolve(result);
        // })
        // .catch (console.log);
  

      // connection.query<Kerkdienst[]>(query, (err: any, res: Kerkdienst[] | PromiseLike<Kerkdienst[]>) => {
      //   console.log('x 2');
      //   if (err) reject(err);
      //   else resolve(res);
      // });
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