import MongoDB_Conn from "@/lib/mongodb";
import Customers from "@/models/Customers";
import {NextResponse } from "next/server";
export async function POST(req) {
    try {
      await MongoDB_Conn();
        const body=await req.json();
        if (body.name) {
  body.name = body.name
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

        const customers=await Customers.create(body);
        return NextResponse.json({success:true,customers,message:"Customer Added Successfully!"},{status:200})
    } catch (error) {
       return NextResponse.json({success:false,message:error});
    }
}
export async function GET() {
    await MongoDB_Conn();
    try {
        const customers=await Customers.find({});
        return NextResponse.json({success:true,customer:customers});
    } catch (error) {
        return NextResponse.json({success:false,message:"Error for getting method"});
    }
}
