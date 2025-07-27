"use client"
import { Button } from '@/components/ui/button';
import Searchbar from './Searchbar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { AlignJustify } from 'lucide-react';
// import handleSearch from './Filters/handleSearch';

const ProductHeader = ({products,onFilterStatus,sidebtn}) => {
  const router=useRouter();
  const [StockFilterProduct,setStockFilterProduct]=useState([]);
  console.log(StockFilterProduct)
 if(onFilterStatus) onFilterStatus(StockFilterProduct);
  return (
    <div className='w-full flex flex-col'>
      <div className='flex  w-full justify-between items-center p-0'>

   
  <div className=' p-1 font-semibold text-3xl '>
    <h1>Products</h1>
  </div>
    <div className=' h-full flex  md:grid  md:grid-cols-[85%_15%] p-1 gap-2 box-border '>
<div className='search  p-1  h-full'>
<Searchbar placeholder='Search products...' onSearch={setStockFilterProduct} filterOptions={["All", "Name", "SKU"]} products={products} onStockFilter={setStockFilterProduct}/>
</div>
{/* <div className='Add-btn p-1 flex justify-center items-center'>
  <Button variant="outline" onClick={()=> router.push('/products/addproduct')} className="w-full cursor-pointer bg-gradient-to-b from-blue-200 to-blue-300 hover:from-blue-300">
    Add Product
  </Button>
</div> */}
    </div>
      </div>
    </div>
  )
}

export default ProductHeader
