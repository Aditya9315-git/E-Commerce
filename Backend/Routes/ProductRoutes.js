const express=require ('express')
const Router=express.Router()
const Uploads= require('../MulterConfigue')
const { productSave, productget, productDelete, productUpdate } = require('../Controller/ProductController')


Router.post('/ProductSave',Uploads.single('ProductImage'),productSave)
Router.get('/ProductGet',productget)
Router.delete('/ProductDelete/:id',productDelete)
Router.put('/ProductUpdate/:id',productUpdate)


module.exports=Router