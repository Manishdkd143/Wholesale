import { MongoDB_Conn } from "@/lib/mongodb";
import Product from "@/models/Product";
import cloudinary from "@/lib/Cloudinary";
export async function POST(req){
  try {
    const formData=await req.formData();
    const ProductName=formData.get('ProductName');
    const MRP=formData.get('MRP');
    const Wholesale=formData.get('Wholesale');
    const Description=formData.get('Description');
    const Stock=formData.get('Stock');
    const Unit=formData.get('Unit');
    const Status=formData.get('Status');
    const Category=formData.get('Category');
    const SubCategory=formData.get('SubCategory');
    const Sku=formData.get('Sku');
    const Image=formData.get('Image');
    const buffer=Buffer.from(await Image.arrayBuffer());
 const b64=buffer.toString("base64");
 const dataURI=`data:${Image.type};base64,${b64}`;
 const uploaded=await cloudinary.uploader.upload(dataURI,{
  folder:'products'
})
await MongoDB_Conn();
const product=await Product.create({
  ProductName,
  MRP,
  Wholesale,
  Description,
  Stock,
  Unit,
  Status,
  Category,
  SubCategory,
  Sku,
  ImageUrl:uploaded.secure_url,
    });
    return Response.json({success:true,product,message:"Product Add Successfully!"},{status:201});
  } catch (error) {
    return Response.json({success:false,message:error.message},{status:500})
  }
}
export async function GET() {
  try {
    await MongoDB_Conn();
    const products=await Product.find();
    return Response.json({success:true,products},{status:200});
  } catch (error) {
    return Response.json({success:false,message:error.message},{status:500});
  }
}