const express=require('express');
const cloudinary=require('cloudinary').v2;
const router=express.Router();
const productModel=require('../Models/products');

cloudinary.config({
  
    api_secret:'UYzNcloaC2-a1tjK6VG8KEP8Tno',
    api_key:'148647855764472',
    cloud_name:'dsqhma4vv'
})

router.post('/',async(req,res)=>{
    
    const file=req.files.photo;
    
    console.log(file);

    const {url}=await cloudinary.uploader.upload(file.tempFilePath);
    
    const product=await productModel.create({
        img:url
    })

res.send('mhm')


})


module.exports=router;