import express from 'express';

const app: express.Application = express();
import * as database from "./config/database"

database.connect();
app.use(express.json());
app.use('/', require('./routes/index'));

const port: number = 4000;

app.listen(port, ()=> {
    console.log(`Server listening on ${port}`);
})