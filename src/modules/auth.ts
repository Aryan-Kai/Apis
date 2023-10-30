import { UUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const createJWT = (mobileRecords: { phoneNumber: string; }) => {
    const token = jwt.sign(
        {
            phoneNumber: mobileRecords.phoneNumber
        },
        process.env.JWT_SECRET!
    );
    return token;
}

export const protect = (req:any,res:Response,next:NextFunction) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401);
        res.send("Not authorized");
        return;
      }
    
      const [, token] = bearer.split(" ");
      if (!token) {
        console.log("here");
        res.status(401);
        res.send("Not authorized");
        return;
      }
    
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        req.mobileRecords = payload;
        console.log(payload);
        next();
        return;
      } catch (e) {
        console.error(e);
        res.status(401);
        res.send("Not authorized");
        return;
      }
}