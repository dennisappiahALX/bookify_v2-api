// middleware function to handle all errors in the application 
import { Request, Response, NextFunction } from 'express';
import logger from './logger'

export const errorHandler = ( error: Error, req: Request, res: Response, next: NextFunction) => {
  // log errors from application

  logger.error(error.message, error)
  res.status(500).send('Server Error');
};

