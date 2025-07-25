'use client'
import {React,useState,useEffect} from 'react'
import { AlignJustify, X, } from 'lucide-react'
import Sidebar from '@/features/admin/Sidebar'
import ProductHeader from '../components/productHeader'
import ProductTable from '../components/productTable'
// import { products } from '@/lib/product-data'
const ProductManagement = () => {
    const [sidebtn,setSideBtn]=useState(false);
    const [stockFilterProduct,setStockFilterProduct]=useState()
  const [selected,setSelected]=useState([]);
  const [products,setProduct]=useState([]);

  const handleEdit=(item)=>{
    console.log("item:",item)
  }
   const handleView=(item)=>{
    console.log("view:",item)
  }
  useEffect(() => {
   const fetchData=async()=>{
    try {
      const res=await fetch('/api/product',{
      method:'GET'
     })
   const data=await res.json();
   setProduct(data.products);
    } catch (error) {
      console.error("fetching error",error.message);
    }
  }
  fetchData();
  }, [])
// products.forEach(product=>console.log(product))
  

  return (
        <div className=" min-h-screen flex overflow-hidden w-full h-full">
      {/* Sidebar */}
      <div
        className={`${
          sidebtn
            ? "fixed z-50 inset-y-0 left-0 sm:w-64 w-full bg-white shadow-lg"
            : "hidden"
        } md:block md:relative md:w-64`}
      >
        <Sidebar />
        {/* Close Button (only visible in mobile view) */}
        <div className="md:hidden absolute top-3.5 left-2 z-50">
          <button onClick={() => setSideBtn(false)}
            className="bg-gray-300 p-1 rounded-sm"
          >
            <X />
          </button>
        </div>
      </div>
      <main className=" p-1 w-full h-full space-y-1 md:space-y-2">
       <div className="">
          <ProductHeader products={products}  onFilterStatus={setStockFilterProduct} sidebtn={setSideBtn}/>
       </div>
       <div>
          <ProductTable products={products} selected={selected} setSelected={setSelected} onEdit={handleEdit} onView={handleView} FilterStatus={stockFilterProduct}/>
       </div>
      </main>
      </div>
  )
}

export default ProductManagement
