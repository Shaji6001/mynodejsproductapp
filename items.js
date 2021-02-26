var express = require("express");
var mongoose= require("mongoose");
const bodyParser= require("body-parser");
var {productModel}= require('./model/product');

var app= express();


app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/productdb?retryWrites=true&w=majority",{useUnifiedTopology: true},{ useNewUrlParser: true });


app.post("/addproduct",async (req,res)=>{

try
{
 var data= req.body;
 var data= new productModel(req.body);
 var result = await data.save();
 console.log(result);
 res.json(result);
 
}
catch(error){res.status(500).send(error)};

})

app.get('/create',async (req, res)=>{
    try
    {
        var data = new productModel(req.body);
        var result= await data.save();
        res.json(result);
    }
    catch(error)
    {res.status(500).send(error)};
})

app.get('/viewall',async(req,res)=>{
    try
    {
      var result = await productModel.find().exec();
      res.json(result)
    }
    catch(error){res.status(500).send(error)}
})

app.post('/update', async (req,res)=>{
    try
    {
        productModel.findByIdAndUpdate(req.body.id,
            {
                name:req.body.name,descreption:req.body.descreption,
                price:req.body.price,distributorname:req.body.distributorname,
                manufname:req.body.manufname,manufyear:req.body.manufyear
            },(error,data)=>{
                if (error){res.send(error)}

            else {res.json({'status':'success'})};
            })
    }
    catch(error){res.status(500).send(error)

    }
})
app.post('/delete', async(req , res)=>{

    try
    {
        productModel.findByIdAndDelete(req.body.id,(error,data)=>{
            if(error){res.send(error)}
            else{res.json({'status':'success'})};
        })
    }
    catch(error){res.status(500).send(error)}
})





app.listen(process.env.PORT|| 3000,function(){
    console.log('Your node js Server is running')
});
