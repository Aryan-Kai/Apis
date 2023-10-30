import { Request, Response } from 'express'
import prisma from '../db'
import { createJWT } from '../modules/auth'

export const sendOtp = async (req:any,res:Response) =>{
    console.log(req.body)
    try{
    const record = await prisma.mobileRecords.create({
        data:{
            phoneNumber:req.body.phoneNumber
        }
    })
    const token = createJWT(record)
    res.status(200)
    res.json({token:token})
}
catch(e) {
    console.log(e)
    res.json({Error:e})
}
}