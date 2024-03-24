const port=8000
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.join())
require('dotenv').config()

const { GoogleGenerativeAI }=require('@google/generative-ai')

const genAI=new GoogleGenerativeAI(process.env.GEMINI_API)

app.get('/gemini',async(req,res)=>{
    console.log(req.body.message)
    const model= genAI.getGenerativeModel({model:"gemini-pro"})
    const msg=req.body.message
    const resut=await result
    const response=await XPathResult.response
})

app.listen(port,()=>(`Listening on ${port}`))
