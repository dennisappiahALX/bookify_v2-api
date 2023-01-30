import { Request, Response } from 'express';


const admin = (req: any, res:Response, next: Function) => {
    if (!req.user.isAdmin) return res.status(403).send('Access denied. Forbidden');

    next();
};

export default admin