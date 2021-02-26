var mongoose= require("mongoose");

var productSchema= new mongoose.Schema({
    
    name: {type:String},
    descreption: {type:String},
    price: {type:String},
    distributorname: {type:String},
    manufname: {type:String},
    manufyear: {type:String}
});

var productModel= mongoose.model('products', productSchema);

module.exports={productModel}
