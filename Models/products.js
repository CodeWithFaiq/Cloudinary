const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    img:String
})

const productModel=mongoose.model('products',productSchema);

module.exports=productModel;