import express from 'express'
import path from 'path'
import router from './router'
import { protect } from './modules/auth'
import { sendOtp } from './handlers/user'

const app = express()

// app.use(express.static('public'))
app.use(express.json());// when we send JSON object, for the post request to understand its a json body or json object
app.get('/',(req,res) => {
    console.log("Server is Running")
    res.status(200)
    res.json({message:"Server is Running"})
    // res.sendFile(path.resolve("public/index.html"))
})
app.post('/sendOtp',sendOtp)
app.use('/api',protect,router);

export default app;