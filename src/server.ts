import express, { Express, Request, Response } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { mysqlTest, getKerkdiensten } from './db/mysql.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

app.get('/api/kerkdiensten', (req, res) => {
    const kerkdiensten = [{
        id: '123',
        q: 'Aaa'
    }, {
        id: '234',
        q: 'Bbb'
    }, {
        id:'345',
        q: 'Cccd'
    }]

    // res.json(kerkdiensten);

    const tDB = new mysqlTest();

    // res.json(tDB.testDB());
    res.json(getKerkdiensten());

});