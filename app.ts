import express from "express";
import { setupRoutes } from './startup/registerRoutes';
import { setupDb } from "./startup/integrateDb";

const app = express();
setupRoutes(app);
setupDb();



const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server has started on port ${port}`))
