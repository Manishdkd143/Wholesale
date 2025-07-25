"use client";
import { Button } from "@/components/ui/button";
import React, { useState,useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CircleArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";

const AddPage = () => {
    const {
    register,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const router=useRouter();
  const inputref = useRef();
  const [imagePreview, setImagePreview] = useState("");
  const [file,setfile]=useState(null);
  const [pagePreview,setPagePreview]=useState(false);

  // Change Image
   const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
    setfile(file);
    console.log("Selected Files:", file);
  };

  const onSubmit = async(data) => {
   const formData=new FormData();
   formData.append("ProductName",data.ProductName);
  formData.append("MRP",data.MRP);
  formData.append("Wholesale",data.Wholesale);
  formData.append("Description",data.Description);
  formData.append("Stock",data.Stock);
  formData.append("Unit",data.Unit);
  formData.append("Status",data.Status);
  formData.append("Category",data.Category);
  formData.append("SubCategory",data.SubCategory);
  formData.append("Sku",data.Sku)
   formData.append("Image",file);
  const res=await fetch('/api/product', {
  method: 'POST',
  body:formData,
});
let result=await res.json();
if(result.success){
  toast.success("Product Successfully Added!");
  reset();
  setfile(null);
  setImagePreview("")
}else{
  toast.error(`Error is ${result.error}`);
}
  };
  const productName=watch('ProductName');
  const price=watch('MRP');
  const WholesalePrice=watch('Wholesale');
  useEffect(() => {
    if(productName){
      const Sku=productName.trim().toUpperCase().replace('/\s+/g',"-").replace('/[^A-Z0-9\-]/g',"")+Math.floor(1000+Math.random()*9000);
      setValue("Sku",Sku)
    }
    if(price&&WholesalePrice){
      const discPrice=price-WholesalePrice;
      setValue("discountPrice",discPrice);
    }
  }, [productName,setValue,price,WholesalePrice])
  
  const ClickDiv = () => {
    inputref.current.click();
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="Main-form">
      <div className=" min-h-screen box-border p-0 overflow-hidden scroll-smooth">

        <div className="box    rounded-sm shadow-2xl">
          <div className="  flex items-center p-3  bg-gradient-to-br from-indigo-500 to-purple-600  px-10 text-white sticky top-0 z-[100] overflow-hidden">
            <div className="relative">
          <button className="p-1" onClick={()=>router.back()}>
            <CircleArrowLeftIcon size={40}/>
          </button>
            </div>
            <div className=" relative left-4">
              <h1 className="text-2xl font-sans font-semibold">
                Add New Product
              </h1>
            </div>
           
          </div>

          <main className="h-[800px] p-[32px_40px] overflow-y-auto ">
            <div className="form-layout  grid grid-cols-1 md:grid-cols-2 gap-[32px] ">
              <div className="form-card border border-[#e5e7eb] bg-white rounded-[16px] p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] ">
                <h2 className="card-title text-[20px] font-semibold text-[#1f2937] mb-[24px] flex items-center gap-[12px]">
                  <span className="card-icon w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-md flex items-center justify-center text-white text-sm">
                    📦
                  </span>
                  <span>Basic Information</span>
                </h2>
                <div className="form-group">
                  <label name="ProductName" className={`required form-label`}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="ProductName"
                    placeholder="Enter product name" 
                  className="form-input"
                    {...register("ProductName", {
                      required: "Name is required",
                    })}
                  />
                  {errors.ProductName?.message && (
                    <p className="text-red-500 text-sm ">
                      {errors.ProductName?.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label name="description" className="required form-label">
                    Description
                  </label>
                  <textarea  name="Description" 
                    placeholder="Enter product description..."
                    className="min-h-24 resize-y form-textarea"
                    {...register("Description", {
                      required: true,
                      message: "Fill this description",
                    })}
                  ></textarea>
                  {errors.Description?.message && (
                    <p className="text-red-500 text-sm ">
                      {errors.description?.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label className="after:content-['*'] after:text-red-500 form-label">
                    Category
                  </label>
                  <select
                    name="Category"
                    id=""
                    className="transition-all form-select" 
                    {...register("Category", { required: true })}
                  >
                    <option value="">--Select--</option>
                    <option value="Cat-01">Cat-01</option>
                    <option value="Cat-02">Cat-02</option>
                    <option value="Cat-03">Cat-03</option>
                  </select>
                  {/* <p>{errors.category?.message}</p> */}
                </div>
                <div className="form-group">
                  <label className="after:content-['*'] after:text-red-500 form-label">
                    Subcategory
                  </label>
                  <select
                    name="SubCategory" 
                    id=""
                    className="transition-all form-select"
                    {...register("SubCategory", { required: true })}
                  >
                    <option value="">--Select--</option>
                    <option value="Cat-01">Cat-01</option>
                    <option value="Cat-02">Cat-02</option>
                    <option value="Cat-03">Cat-03</option>
                  </select>
                </div>
                <div className="form-group">
                  <label name="Brand" className="form-label">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="Brand"
                    className="form-input"
                    placeholder="Enter or select brand"
                    {...register("Brand")}
                  />
                </div>
              </div>
              {/* Image Card */}
              <div className="form-card-Image border border-[#e5e7eb] bg-white rounded-[16px] p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h2 className="card-title text-[20px] font-semibold text-[#1f2937] mb-[24px] flex items-center gap-[12px]">
                  <span className="card-icon w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-md flex items-center justify-center text-white text-sm">
                    🖼️
                  </span>
                  <span>Product Image</span>
                </h2>
                <div className="form-group">
                  <label className="required form-label">Product Image</label>
                  <input
                    type="file"
                    name="Image"
                    id=""
                    className="hidden form-input"
                    ref={inputref}
                    onChange={handleChangeImage}
                  />
                  <div
                    onClick={ClickDiv}
                    className="border rounded-[12px] p-[48px_24px] text-center transition-all cursor-pointer hover:border-[#667eea] hover:bg-[#f0f4ff] "
                  >
                    <div className="upload-icon text-5xl text-[#9ca3af] mb-4">
                      📷
                    </div>
                    <div className="upload-text font-medium text-[#374151] mb-2">
                      Click to upload or drag and drop
                    </div>
                    <div className="upload-subtext text-[#6b7280] text-[13px]">
                      PNG, JPG, GIF up to 10MB
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="imagePreview"
                      className="h-40 w-40 object-cover rounded border"
                    />
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="tag-input form-input"
                    placeholder="Add tags..."
                  />
                </div>
              </div>
              <div className="form-card-pricing border border-[#e5e7eb] bg-white rounded-[16px] p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h2 className="card-title">
                  <span className="card-icon w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-md flex items-center justify-center text-white text-sm">
                    💰
                  </span>
                  <span>Pricing</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="required form-label">MRP</label>
                    <input
                      type="number" 
                      name="MRP"
                      id=""
                      placeholder="0.00"
                    className="form-input"
                      min="1" 
                      {...register("MRP", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="required form-label">Wholesale Price</label>
                    <input
                      type="number" 
                      placeholder="0.00" name="Wholesale"
                      className="form-input"
                      min="1" 
                      {...register("Wholesale", { required: true })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="required from-label">Discount Price</label>
                  <input
                    type="number"
                    placeholder="0.00" name="Discount"
                    min="1"
                    className="form-input"
                    {...register("discountPrice", { required: true })}
                  />
                </div>
              </div>

              {/* stock Management */}
              <div className="form-card-stock border border-[#e5e7eb] bg-white rounded-[16px] p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h2 className="card-title">
                  <span className="card-icon">📊</span>
                  <span>Stock Management</span>
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="form-group">
                    <label className="required from-label">Quantity</label>
                    <input
                      type="number"  name="Stock"
                      placeholder="0"
                      className="form-input"
                      min="0"
                      {...register("Stock", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="required from-label">Units</label>
                    <select
                      name="Unit"
                      id="" 
                      className="form-select transition-all"
                      {...register("Unit", { required: true })}
                    >
                      <option value="">--Select--</option>
                      <option value="pcs">pcs</option>
                      <option value="kg">kg</option>
                      <option value="ltr">ltr</option>
                      <option value="box">box</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="required  text-[13px] from-label">Stock Status</label>
                    <select
                      name="Status"
                      className="form-select transition-all"
                      id=""
                      {...register("Status", { required: true })}
                    >
                      <option value="">--Select--</option>
                      <option value="In Stock">In Stock</option>
                      <option value="Low Stock">Low Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
      <label htmlFor="SKU" className="block text-sm font-medium text-gray-700 mb-1 form-label">
    SKU (Stock Keeping Unit)
  </label>
  <input
    type="text"
    id="SKU"
   
    {...register("Sku", { required: "SKU is required" })}
    placeholder="Enter SKU code" readOnly
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 form-input"
  />
  {errors.Sku && (
    <p className="text-red-500 text-sm mt-1">{errors.Sku?.message}</p>
  )}
                </div>
              </div>
            </div>
            <div className="actions  col-span-full flex justify-end gap-4 mt-8 pt-8 border-t border-t-[#e5e7eb]">
              <Button
                variant="secondary"
                className="bg-[#f3f4f6] text-[#374151] transition-all border-0 cursor-pointer hover:bg-[#e5e7eb]"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                type="button"
                onClick={()=>setPagePreview(true)}
                className={
                  "bg-blue-400 hover:bg-blue-600  transition outline-0 hover:outline border-0 px-6 text-white cursor-pointer"
                }
              >
                Preview
              </Button>
            </div>
          </main>
        </div>
{/* Page Preview */}
{pagePreview && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white w-full max-w-2xl rounded-xl p-6 shadow-lg relative">
      <button
        onClick={() => setPagePreview(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold mb-4"> Preview Product Details</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-sm">
          <tbody>
            <tr><td className="border px-3 py-2 font-bold">Product Name</td><td className="border px-3 py-2">{watch("ProductName")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">MRP</td><td className="border px-3 py-2">{watch("MRP")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">Wholesale</td><td className="border px-3 py-2">{watch("Wholesale")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">Stock</td><td className="border px-3 py-2">{watch("Stock")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">Unit</td><td className="border px-3 py-2">{watch("Unit")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">Status</td><td className="border px-3 py-2">{watch("Status")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">Category</td><td className="border px-3 py-2">{watch("Category")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">SubCategory</td><td className="border px-3 py-2">{watch("SubCategory")}</td></tr>
            <tr><td className="border px-3 py-2 font-bold">SKU</td><td className="border px-3 py-2">{watch("Sku")}</td></tr>
            <tr>
              <td className="border px-3 py-2 font-bold">Image</td>
              <td className="border px-3 py-2">
                {imagePreview ? (
                  <img src={imagePreview} alt="imagePreview" className="w-32 h-auto rounded" />
                ) : (
                  <span>No Image Selected</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6 gap-3">
        <button
          onClick={() => setPagePreview(false)}
          className="px-4 py-2 rounded bg-gray-400 text-white"
        >
          Cancel
        </button>
        <button
          onClick={()=>{
            document.getElementById('Main-form').requestSubmit();
            setPagePreview(false);
          }}
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  </div>
)}




      </div>
    </form>
  );
};

export default AddPage;
