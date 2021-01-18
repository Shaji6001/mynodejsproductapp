var mongoose= require("mongoose");

var productSchema= new mongoose.Schema({
    name: {type:String},
    descreption: {type:String},
    price: {type:Number},
    distributorname: {type:String},
    manufname: {type:String},
    manufyear: {type:Number}
});

var productModel= new mongoose.model('products', productSchema);

module.exports={productModel}
