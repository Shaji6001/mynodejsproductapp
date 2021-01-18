var express = require("express");
var mongoose= require("mongoose");
const bodyParser= require("body-parser");
var {productModel}= require('./model/product');

var app= express();


app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/productdb?retryWrites=true&w=majority",{useUnifiedTopology: true},{ useNewUrlParser: true });


app.post("/add",async (req,res)=>{

try
{
 var data= req.body;
 var productData= new productModel(data);
 var result = await productData.save();
 res.json(result);
 
}
catch(error)
{

}
})



app.listen(process.env.PORT|| 3000,function(){
    console.log('Your node js Server is running')
});
