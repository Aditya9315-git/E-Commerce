const mongoose =require('mongoose')

const productschema= mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },

    ProductDescription:String,

    ProductTitle:{
        type:String,
        required:true
    },

    ProductPrice:{
        type:Number,
        required:true
    },

    ProductImage:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('AdminProduct',productschema)