import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request,Response } from 'express';
import mongoose from 'mongoose';
import { errorHandler } from './middlewares/eHandler';
import router from './routes/menuRoutes';
import configs from './config/mongoConfig';
import { Menu } from './models/menu';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
configs()

  
app.use('/api/menus', router);

app.use(errorHandler);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
