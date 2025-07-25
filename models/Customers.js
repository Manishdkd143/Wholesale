import mongoose from "mongoose";
const customerSchema=mongoose.Schema({
    name:{type:String,required:true},
    customerID:{type:String,required:true},
    phone:String,
    email:String,
    address:String,
    status:{type:String},
})
export default mongoose.models.Customer||mongoose.model('Customer',customerSchema);