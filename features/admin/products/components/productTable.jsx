"use client"
import {React,useState} from 'react'
import ProductRow from './productRow'
import { Button } from '@/components/ui/button'
import { Blocks, ChevronLeftSquareIcon, ChevronRightSquareIcon} from 'lucide-react'
// import { products } from '@/lib/product-data'

const ProductTable = ({products,selected,onEdit,onView,setSelected,FilterStatus}) => {
  const [page,setPage]=useState(0);
console.log("Filter",FilterStatus)
  const rowsPerPage=15;
const currentData = FilterStatus?.length > 0 ? FilterStatus : products;
const paginated = currentData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  const toggleSelect=(Sku)=>{
           setSelected(prev=>prev.includes(Sku)?prev.filter(id=>id!==Sku):[...prev,Sku])
}
  const selectAll=()=>{
    if(selected.length===products.length){
      setSelected([]);
    }else{
      setSelected(products.map((items)=>(items.Sku)))
    }
  }
  return (
         <div className=" min-w-full w-full">
      <table className=" overflow-x-auto min-w-full border border-gray-200 scroll-smooth">
        <thead className=" text-gray-700 uppercase text-sm w-full">
          <tr>
            <th className="px-3 py-3">
              <input
                type="checkbox"
                checked={selected.length === products.length}
                onChange={selectAll}
              />
            </th>
            <th className="px-4 py-3 text-left">Image</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">SKU</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Stock</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
    
          {paginated.length&&FilterStatus.length>0?(paginated.map((product,index)=>(
         <ProductRow key={`${product._id}`} product={product} selected={selected.includes(product.Sku)} toggleSelect={toggleSelect} onEdit={onEdit} onView={onView} />
          ))):
           (  <tr>
            <td colSpan={8} className="text-center text-gray-500 py-4">
              🚫 No product Here
            </td>
          </tr>)
          }
        </tbody>
      </table>
      {/* Pagination Control */}
{paginated.length>20&&
 (<div className={`min-w-full  flex justify-center items-center relative mt-4 box-border py-2 ${paginated.length>0?"block":"hidden"}`}>
      <div className=" absolute left-1/2  flex items-center justify-center">
 <Button disabled={page===0} size="icon" variant="secondary" className="p-2 size-8" onClick={()=>setPage(page-1)}><ChevronLeftSquareIcon size={30}/></Button>
  <Button size="icon" variant="secondary">{page}</Button>
<Button  disabled={(page+1)*rowsPerPage>=products.length} onClick={()=>setPage(page+1)} size="icon" variant="secondary" className="p-2 size-8"><ChevronRightSquareIcon size={30}/></Button>
      </div>
    </div>)
}
    </div>
  )
}

export default ProductTable
