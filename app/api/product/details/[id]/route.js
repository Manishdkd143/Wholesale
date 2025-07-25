import MongoDB_Conn from "@/lib/mongodb";
import Product from "@/models/Product";
export  async function GET(req,{params}) {
    await MongoDB_Conn();
 try {
    const product=await Product.findById(params.id);

    return Response.json({success:true,product},{status:200})
 } catch (error) {
    return Response.json({success:false,message:error.message},{status:400})
 }
}