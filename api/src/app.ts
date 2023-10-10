import "dotenv/config";

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => res.json({ message: 'Welcome to EasyBank', status: 'In progress', code: res.statusCode }));

export default app;
