import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
     ProductName: { type: String, required: true },
  MRP: { type: Number, required: true },
  Wholesale: { type: Number },
 Description:{type:String},
  Stock:{type:Number ,default:0},
  Unit: { type: String, default: 'pcs' },
  Status: { type: String, default: "In Stock" },
  Category:{type:String,required:true},
  SubCategory: String,
  Sku:{type:String,required:true},
  ImageUrl:String,
},{timestamps:true});
export default mongoose.models.Product||mongoose.model('Product',ProductSchema);