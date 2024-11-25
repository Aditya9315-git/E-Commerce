const ProductModel=require('../Models/ProductModel')

let productSave= async(req,res)=>{
    let ProductName=req.body.ProductName
    let ProductDescription=req.body.ProductDescription
    let ProductTitle=req.body.ProductTitle
    let ProductPrice=req.body.ProductPrice
    let ProductImage=req.file.filename

    try {
        let Product= await ProductModel.create({ProductName,ProductDescription,ProductTitle,ProductPrice,ProductImage})
        res.json({msg:'Product Added',success:true})
    } catch (error) {
        res.json({msg:'ERROR',success:false,error :error.message})
        
    }
}



let productget= async(req,res)=>{
    let {ProductName,ProductDescription,ProductTitle,ProductPrice,ProductImage}=req.body

    try {
        let Product= await ProductModel.find()
        res.json({msg:"Product get succsefully", success:true, Product})
    } catch (error) {
        res.json({msg:'ERROR',success:false,error :error.message})
    }
}

let productDelete= async(req,res)=>{
    let id=req.params.id

    try {
        let Product= await ProductModel.findByIdAndDelete(id)
        res.json({msg:"Product Deleted succsefully", success:true})

    } catch (error) {
        res.json({msg:'ERROR',success:false,error :error.message})
    }
}

let productUpdate= async(req,res)=>{
    let id =req.params.id;
    let updateproduct=req.body;

    try {
        let Product= await ProductModel.findByIdAndUpdate(id,updateproduct,{
            new:true,
            runValidators:true, 
        })
        if (!Product){
            // If no product is found with the given ID, return an error
            return res.status(404).json({ msg: 'Product not found', success: false });
        }
        res.json({msg:"Product Updated succsefully", success:true})
        
    } catch (error) {
        res.json({msg:'ERROR',success:false,error :error.message})
        
    }
} 


module.exports={
    productSave,
    productget,
    productDelete,
    productUpdate
}