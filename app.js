const { json } = require('body-parser');
const express=require('express');
const mongoose=require('mongoose');
const productRouter=require('./routes/products');
const fileupload=require('express-fileupload')
const cors=require('cors');
const app=express();
app.use(cors());
app.use(json());
app.use(fileupload({
    useTempFiles:true
}))
app.use('/api/products',productRouter);

mongoose.connect('mongodb://127.0.0.1/cloudinary').then(()=>{
    console.log('yoooo')
}).catch(()=>{
    console.log('ahhhhhhhhhhhhhhhh')
})

app.listen(3000);