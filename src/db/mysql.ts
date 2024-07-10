import mysql from 'mysql2/promise';
import mysqlConfig from '../config/mysql.config.js';

export async function getKerkdiensten() {

    try {
        const connection = await mysql.createConnection({
            host: mysqlConfig.mysql_host,
            port: mysqlConfig.mysql_port,
            user: mysqlConfig.mysql_user,
            password: mysqlConfig.mysql_pwd,
            database: mysqlConfig.mysql_database
        });

        const [results, fields] = await connection.execute(
            'SELECT * FROM kerkdienst',
            []
        );
        
        console.log(results);
        console.log(fields);

        // return JSON.stringify(results);

    } catch (err) {
        console.log(err);
    }
    
    const test = [{
        id: '1',
        q: 'Q'
    }, {
        id: '2',
        q: 'R'
    }, {
        id:'3',
        q: 'S'
    }]

    return test;
}

export class mysqlTest {
    testDB() {
        const kerkdiensten = [{
            id: '123',
            q: 'Aaa'
        }, {
            id: '234',
            q: 'Bbb'
        }, {
            id:'345',
            q: 'Ccc __ testDB 2'
        }]

        return kerkdiensten;
    }
}