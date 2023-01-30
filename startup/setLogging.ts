import expressWiston from "express-winston"
import logger from "../middlewares/logger"
import 'express-async-errors';

export const setupLogging = (app: any) => {
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
    
    app.use(expressWiston.logger({
        winstonInstance : logger,
        statusLevels : true 
    }));
}