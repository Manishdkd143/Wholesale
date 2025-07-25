import MongoDB_Conn from "@/lib/mongodb";
import Customers from "@/models/Customers";
export async function PUT(req,context) {
    await MongoDB_Conn();
    try {
        const {id}=context.id;
        const updated=await Customers.findByIdAndUpdate(id);
        if(!updated){
            return Response.json({
                success:false,message:'No Found Customer'
            })
        }
        return Response.json({success:true,data:updated,message:'Updated Successfully!'});
    } catch (error) {
        return Response.json({
            success:false,message:error
        })
    }
}
export async function GET(params) {
    await MongoDB_Conn();
    try {
        const customers=await Customers.find({});
      if(!customers){
        return Response.json({success:false,message:'No Found Customers'})
      }else{
        return Response.json({
            success:true,
            data:customers,
        })
      }
    } catch (error) {
        return Response.json({
            success:false,message:error
        })
    }
}