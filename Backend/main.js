const express= require('express')
const env=require('dotenv')
const app= express()

// dotenv configue
env.config()
const Port= process.env.PORT || 4000

// Database confug
let db= require('./DatabaseConfigue')
db()

let ProductRoutes=require('./Routes/ProductRoutes')


// middleware
app.use(express.json())


app.use('/api',ProductRoutes)


app.listen(Port,()=>{
    console.log(`Server is running in ${Port}`)
})