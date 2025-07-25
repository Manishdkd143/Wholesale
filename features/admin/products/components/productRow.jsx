"use client"
import {React,useMemo,useState,useEffect} from 'react'
import { Pencil,Ellipsis } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
const ProductRow = ({product,selected,toggleSelect,onEdit,onView}) => {

const router=useRouter();
  const getStockStatus=(stock)=>{
    if(stock>10) return {status:"In Stock",color:"green"};
    if(stock>0) return {status:"Low Stock",color:"red"};
    return {status:"Out Stock",color:"black"}
  }
  const {status,color}=getStockStatus(product.Stock);
  return (
   <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
      <td className="px-3 py-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => toggleSelect(product.Sku)} />
        </td><td className="px-3 py-2">
            <img
              src={product?.ImageUrl}
              alt={product?.zproductName}
              width={40}
              height={40}
              className="rounded object-cover" />
          </td><td className="px-3 py-2">{product.ProductName}</td><td className="px-3 py-2">{product.Sku}</td><td className="px-3 py-2">₹{product.MRP}</td><td className="px-1 py-2 ">
            <div className="w-fit  flex flex-col py-2 text-center gap-1">
              <span>{product?.Stock}</span>
              <span><Badge variant="default" className={`bg-${color}-300 text-${color}-600`}>{status}</Badge></span>
            </div>
          </td><td className="px-3 py-2">{product.Category}</td><td className="px-3 py-4 flex gap-2  text-center h-full relative">
            <button
              onClick={()=>router.push(`/dashboard/products/edit/${product._id}`)}
              className="text-blue-600 hover:underline p-1 group  cursor-pointer"
            >
              <Pencil strokeWidth={1} />
              <span className='absolute text-sm font-medium text-center px-1 rounded-sm hidden bg-gray-400 text-black left-1 top-0  group-hover:block transition'>
                Edit
              </span>
            </button>
            <button
              onClick={() => router.push(`/dashboard/products/details/${product._id}`)}
              className="text-blue-600 hover:underline p-1 group cursor-pointer"
            >
              <Ellipsis />
              <span className='absolute text-sm font-medium text-center px-1 rounded-sm hidden bg-gray-400 text-black right-+1 top-0  group-hover:block transition'>
                More
              </span>
            </button>
          </td>
      
    
    </tr>
  )
}

export default ProductRow
