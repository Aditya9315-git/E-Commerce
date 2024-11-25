 const mongoose= require('mongoose')

 let connection=()=>{
    mongoose.connect(process.env.Database)
    .then(()=> console.log("Database connected"))
    .catch((err)=> console.log(err))
 }

 module.exports= connection