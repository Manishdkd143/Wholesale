'use client'
import  { React,useState,useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast';


const Editpage = () => {
    const {id}=useParams();
    const router=useRouter();
    const [formData,setFormData]=useState({
        ProductName:'',
        MRP:'',
        Wholesale:'',
        Description:'',
        Stock:'',
        Unit:'',
        Status:'',
        Category:'',
        SubCategory:'',
        ImageUrl:''
    })
   
    useEffect(() => {
    fetch(`/api/product/edit/${id}`)
    .then(res=>res.json())
    .then(data=>{
            const p=data.product;
            setFormData({
              ProductName: p.ProductName || '',
          MRP: p.MRP || '',
          Wholesale: p.Wholesale || '',
          Description: p.Description || '',
          Stock: p.Stock || '',
          Unit: p.Unit || '',
          Status: p.Status || '',
          Category: p.Category || '',
          SubCategory: p.SubCategory || '',
          ImageUrl: p.ImageUrl || '',

            })
        }).catch(error=>console.log(error))
       
    }, [id])
 const handleChange=(e)=>{
setFormData((prev)=>({
   ...prev,
   [e.target.name]:e.target.value,
}))
 }
 const handleStatus=(stock)=>{
   if(stock>10) return "In Stock";
   if(stock>0&&stock<=10) return "Low Stock";
   return "Out Stock";
 }


    const handleSubmit=async(e)=>{
    e.preventDefault();
   const res=await fetch(`/api/product/edit/${id}`,{
    method:"PUT",
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(formData)
   });
  const data=await res.json();
  if(data.success){
    toast.success('Product Updated!')
    router.push('/products')
  }
  else{
    toast.error(`Error is Updated ${data.message}`);
  }
    }
    const handleback=()=>{
      router.back()
    }
    const Input = ({ label, name, type = 'text', value, onChange }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-emerald-300"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
  return (
   <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 p-4 sm:p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Edit Product</h1>
          <p className="text-gray-600">Update product information and details</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="space-y-8">
            {/* Product Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Input 
                label="Product Name" 
                name="ProductName" 
                value={formData.ProductName} 
                onChange={handleChange} 
              />
              <Input 
                label="MRP (₹)" 
                name="MRP" 
                type="number" 
                value={formData.MRP} 
                onChange={handleChange} 
              />
              <Input 
                label="Wholesale (₹)" 
                name="Wholesale" 
                type="number" 
                value={formData.Wholesale} 
                onChange={handleChange} 
              />
              <Input 
                label="Stock Quantity" 
                name="Stock" 
                type="number" 
                value={formData.Stock} 
                onChange={handleChange} 
              />
              <Input 
                label="Unit" 
                name="Unit" 
                value={formData.Unit} 
                onChange={handleChange} 
              />
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Status</label>
                <input
                  type="text"
                  value={handleStatus(formData.Stock)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-600"
                  readOnly
                />
              </div>
              <Input 
                label="Category" 
                name="Category" 
                value={formData.Category} 
                onChange={handleChange} 
              />
              <Input 
                label="Sub Category" 
                name="SubCategory" 
                value={formData.SubCategory} 
                onChange={handleChange} 
              />
              <Input 
                label="Image URL" 
                name="ImageUrl" 
                value={formData.ImageUrl} 
                onChange={handleChange} 
              />
            </div>

            {/* Description - Full Width */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Product Description</label>
              <textarea
                name="Description"
                rows={4}
                value={formData.Description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 hover:border-emerald-300 resize-none"
                placeholder="Enter detailed product description..."
              />
            </div>

            {/* Image Preview */}
            {formData.ImageUrl && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Product Preview</h3>
                <div className="flex justify-center">
                  <img
                    src={formData.ImageUrl}
                    alt="Product Preview"
                    className="max-h-64 rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={handleback}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  )
}


export default Editpage
