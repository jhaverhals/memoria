import express, { Express, Request, Response } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import Routes from "./routes/index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

new Routes(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});