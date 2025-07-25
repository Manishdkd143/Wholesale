'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Addcustomers = () => {

   
  const [customer, setCustomer] = useState({
    name: "",
    customerID: "",
    phone: "",
    email: "",
    address: "",
    status: "Active",
  });
useEffect(() => {
  const uniqueId=`CUST-${uuidv4().slice(0,4).toUpperCase()}`
 setCustomer((prev)=>({...prev,customerID:uniqueId}))
}, [])

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Customer Data:", customer);
   
    // handle post request here
    const res=await fetch('/api/customers',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
        body:JSON.stringify(customer)
    })
    const result=await res.json();
    if(res.ok && result.success){
      console.log("Saved Data:",result.data)
       setCustomer({
        customerID: `CUST-${uuidv4().slice(0,4).toUpperCase()}`,
        name: "",
        phone: "",
        email: "",
        address: "",
        status: "Active",
      });
    }else{
      console.log("No response!");
    }
   
  };


  return (
    <div className="min-h-screen px-4 py-6 md:px-12 lg:px-24">
      <div className=" rounded-xl shadow-md p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          ➕ Add New Customer
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">


          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Name"
              required
            />
          </div>

          {/* ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Customer ID</label>
            <input
              type="text"
              name="customerID"
              value={customer.customerID}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ID"
              required
            />
          </div> 
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Phone"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              value={customer.address}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Address"
              required
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={customer.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2  flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2  rounded-lg shadow transition cursor-pointer"
            >
              Save Customer
            </button>
          </div>
        </form>
      </div>
    </div>




  )
  
}

export default Addcustomers
