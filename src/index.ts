import * as dotenv from 'dotenv'
dotenv.config()
import app from './server'

app.listen(3001,()=> {
    console.log("Server Started at http://localhost:3001")
})