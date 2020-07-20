import express, { Request, Response } from 'express';
import bodyParser from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import exampleRoute from './routes/exampleRoute';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/example', exampleRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});