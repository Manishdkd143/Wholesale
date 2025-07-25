'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PageLoader from '../components/loaderPage'
import { CircleArrowLeftIcon, CircleCheck, CircleCheckBig, ShoppingBagIcon } from 'lucide-react'
const Detailpage = () => {
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(true);
    const router=useRouter();
    useEffect(() => {
 const timeout=setTimeout(() => {
     setLoading(false)
     return () => clearTimeout(timeout)
      },1500);
      fetch(`/api/product/details/${id}`)
      .then(res=>res.json())
      .then(data=>setProduct(data.product))
    }, [id])
 
    
    if(loading) return <PageLoader/>
  return (
    <div className='container mx-auto px-6  py-8 '>
       <div className="relative">
                <button className="p-1" onClick={()=>router.back()}>
                  <CircleArrowLeftIcon size={40}/>
                </button>
                  </div>
      <div className=' md:h-10/12 flex flex-col md:flex md:flex-row'>
         <div className='  flex-1/3 p-2 rounded-l-2xl'>
         <div className=' h-full  flex justify-center items-center'>
           <div className="product-card max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <img
            src={product?.ImageUrl}
            alt={product?.ProductName}
            className="w-full h-64 object-cover rounded-lg "
          />
        </div>
         </div>
         </div>
         <div className=' flex-1/2 p-4 justify-center items-center rounded-r-2xl'>
           {/* Product Details */}
          <div className="space-y-6 ml-8 flex flex-col ">
            <Label label="Product-Name:" value={product.ProductName} className="px-2 text-3xl font-poppins font-bold text-gray-800"/>
       <Label label="SKU:" value={product.Sku} className="px-2"/>

          <p className="text-md text-gray-900">
           <Label label="Category:" value={product.Category} className=" text-sm font-semibold text-gray-600 bg-gray-200 px-3 py-1 rounded-full"/>
          </p>

          <div className="space-y-2 space-x-4 flex">
           <Label label="Wholesale-Price:" value={product.Wholesale} className="px-2 text-lg text-gray-60"/>
            <p className="line-through text-red-500 text-xl"><Label label={`₹MRP:`} value={product.MRP} className="px-2 "/></p>
          </div>
          {/* Description */}
          <div className="pt-2">
         <Label label="Description-" className="border-0 p-1 text-lg font-semibold text-gray-700"/>
         <textarea name="Description" id="" className=' text-gray-600 leading-relaxed  py-2 w-full outline-0 px-2' readOnly>{product?.Description|| "No description available."}</textarea>
          </div>

          <div className="flex items-center  ">
            <p><ShoppingBagIcon strokeWidth='2px'  size={20}/></p>
            <Label label="Stock:" value={`${product.Stock}${product.Unit}`} className="px-1 text-gray-600 font-semibold"/>
            <p className='ml-2'><CircleCheck strokeWidth='2px' size={20}/></p><Label label="Status-" value={product.Status} className="px-0 font-semibold text-green-600"/>
          </div>


        </div>
         </div>
      </div>
    </div>
  )
}
export default Detailpage;
function Label({label,value,className}){
  return (
    <div className=' p-1 font-poppins gap-2'>
    <label value={value} className={`${className}`}>{label}{value}</label>
    </div>
  )
}