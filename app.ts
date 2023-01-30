import express from "express";
import { setupRoutes } from './startup/registerRoutes';
import { setupDb } from "./startup/integrateDb";
import { setupConfig } from "./startup/setConfig";
import { setupLogging} from "./startup/setLogging"

const app = express();

setupLogging(app)
setupRoutes(app);
setupDb();
setupConfig();




const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server has started on port ${port}`))
