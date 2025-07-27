'use client'
import {React,useState,useEffect} from 'react'
import { AlignJustify, X, } from 'lucide-react'
import Sidebar from '@/features/admin/Components/Sidebar'
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
        <div className=" min-h-screen flex overflow-y-auto px-2 h-full flex-col">
       <div className="p-[5px_30px] bg-white border-b-[#0e0e0e] border-b-[1px] shrink-0">
          <ProductHeader products={products}  onFilterStatus={setStockFilterProduct} sidebtn={setSideBtn}/>
       </div>
       <div className="flex-1 overflow-y-auto p-[5px_5px]">
          <ProductTable products={products} selected={selected} setSelected={setSelected} onEdit={handleEdit} onView={handleView} FilterStatus={stockFilterProduct}/>
       </div>

      </div>
  )
}

export default ProductManagement
