import MongoDB_Conn from "@/lib/mongodb";
import Customers from "@/models/Customers";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await MongoDB_Conn();
  try {
    const { id } = params;
    const deletedCustomer = await Customers.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return NextResponse.json(
        { success: false, message: "Customer not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Deleted successfully", data: deletedCustomer },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  await MongoDB_Conn();
  try {
    const body = await req.json();
    const id= params.id;
    const updatedCustomer = await Customers.findOneAndUpdate(
     { customerID: id },
      { $set: body },
      { new: true, runValidators: true }
    );
    if (!updatedCustomer) {
      return NextResponse.json(
        { success: false, message: "Customer not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Customer updated", data: updatedCustomer },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Update failed", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  await MongoDB_Conn();
  try {
    const id = params.id;
    console.log("Fetching customer with ID:", id);
    const customer = await Customers.findOne({customerID: id});
    if (!customer) {
      return NextResponse.json(
        { success: false, message: "Customer not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, data: customer },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error in GET method", error: error.message },
      { status: 500 }
    );
  }
}