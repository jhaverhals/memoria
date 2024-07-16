import express, { Express, Request, Response } from "express";
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import Routes from "./routes/index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());

new Routes(app);

app.use(express.static(path.join(__dirname, '../../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});