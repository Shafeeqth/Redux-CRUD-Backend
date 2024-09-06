import express, { Express } from "express";
import "dotenv/config";
import nocache from "nocache";
import connectDb from './db/connectDb';



const app: Express = express();
const port = process.env.PORT || 3000;
connectDb();

import userRoute from "./routers/userRoute";
import adminRoute from "./routers/adminRoute";
app.use(nocache());

app.use("/", userRoute);
app.use("/admin", adminRoute);


app.listen(port, () => {
  console.log(`[server]: Server is running in http://localhost:${port}`);
});
