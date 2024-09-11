import express, { Application } from "express";
import "dotenv/config";
import nocache from "nocache";
import connectDb from './db/connectDb';
import cors from 'cors';



const app: Application = express();
const port = process.env.PORT || 3000;
connectDb();

import userRoute from "./routers/userRoute";
import adminRoute from "./routers/adminRoute";
app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const corsOptions: cors.CorsOptions = {
  origin:  'http://localhost:5173',
  methods: ['GET', "POST", 'PUT', 'DELETE']
};


app.use(cors(corsOptions));
app.use("/", userRoute);
app.use("/admin", adminRoute);


app.listen(port, () => {
  console.log(`[server]: Server is running in http://localhost:${port}`);
});
