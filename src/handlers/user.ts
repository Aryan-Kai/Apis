import { Request, Response } from 'express'
import prisma from '../db'
import { createJWT } from '../modules/auth'

export const sendOtp = async (req:any,res:Response) =>{
    const record = await prisma.mobileRecords.create({
        data:{
            phoneNumber:req.body.phoneNumber
        }
    })
    const token = createJWT(record)
    res.status(200)
    res.json({token:token})
}