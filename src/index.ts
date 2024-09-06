import express, { Express, Request, Response } from "express";
import "dotenv/config";


const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello world</h1>');
});


app.listen(port, ()=> {
    console.log(`[server]: Server is running in http://localhost:${port}`);
});
