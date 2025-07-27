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
  if(!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <Blocks className="animate-spin text-gray-500" size={40} />
      </div>
    );
  }

  return (
     <section className="h-full flex flex-col">
  {/* Container */}
  <div className="h-full flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">

    {/* Desktop Table Header - Sticky */}
    <div className="hidden md:block sticky top-0 z-20 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 uppercase text-xs font-semibold border-b-2 border-gray-200">
          <tr>
            {/* Checkbox Column */}
            <th className="px-3 py-4 text-center w-12">
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  checked={selected.length === products.length && products.length > 0}
                  onChange={selectAll}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </th>
            
            {/* Image Column */}
            <th className="px-3 py-4 text-center w-20">
              <div className="flex justify-center items-center">
                <span>Image</span>
              </div>
            </th>
            
            {/* Product Name Column */}
            <th className="px-4 py-4 text-center min-w-[100px] w-[415px] flex-1">
              <div className="flex justify-center items-center">
                <span>Product Name</span>
              </div>
            </th>
            
            {/* SKU Column */}
            <th className="px-4 py-4 text-center w-32 lg:w-36">
              <div className="flex justify-center items-center">
                <span>SKU</span>
              </div>
            </th>
            
            {/* Price Column */}
            <th className="px-4 py-4 text-center w-24 lg:w-28">
              <div className="flex justify-center items-center">
                <span>Price</span>
              </div>
            </th>
            
            {/* Stock Column */}
            <th className="px-4 py-4 text-center w-20 lg:w-24">
              <div className="flex justify-center items-center">
                <span>Stock</span>
              </div>
            </th>
            
            {/* Category Column */}
            <th className="hidden lg:table-cell px-4 py-4 text-center w-28 xl:w-32">
              <div className="flex justify-center items-center">
                <span>Category</span>
              </div>
            </th>
            
            {/* Actions Column */}
            <th className="px-4 py-4 text-center w-28 lg:w-32">
              <div className="flex justify-center items-center">
                <span>Actions</span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    {/* Desktop Table Body - Scrollable */}
    <div className="flex-1 hidden md:block overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <table className="w-full">
        <tbody className="text-gray-600 text-sm divide-y divide-gray-100">
          {paginated.length && FilterStatus.length > 0 ? (
            paginated.map((product, index) => (
              <tr 
                key={product._id} 
                className={`hover:bg-blue-50 transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                {/* Checkbox */}
                <td className="px-3 py-4 text-center w-12">
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      checked={selected.includes(product.Sku)}
                      onChange={() => toggleSelect(product.Sku)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                </td>
                
                {/* Image */}
                <td className="px-3 py-4 text-center w-20">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.ProductName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 text-xs font-medium">No Image</span>
                      )}
                    </div>
                  </div>
                </td>
                
                {/* Product Name */}
                <td className="px-4 py-4 text-center min-w-[150px] flex-1">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-medium text-gray-900 text-center leading-tight">
                      {product.ProductName}
                    </span>
                    {/* Show category on medium screens below name */}
                    <span className="lg:hidden text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full mt-1">
                      {product.category || 'Uncategorized'}
                    </span>
                  </div>
                </td>
                
                {/* SKU */}
                <td className="px-4 py-4 text-center w-32 lg:w-36">
                  <div className="flex justify-center">
                    <span className="font-mono text-xs bg-gray-100 border border-gray-200 px-3 py-1 rounded-md shadow-sm">
                      {product.Sku}
                    </span>
                  </div>
                </td>
                
                {/* Price */}
                <td className="px-4 py-4 text-center w-24 lg:w-28">
                  <div className="flex justify-center">
                    <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                      ₹{product.MRP}
                    </span>
                  </div>
                </td>
                
                {/* Stock */}
                <td className="px-4 py-4 text-center w-20 lg:w-24">
                  <div className="flex justify-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-full border ${
                      (product.stock || 0) > 10 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : (product.stock || 0) > 0 
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                          : 'bg-red-100 text-red-800 border-red-200'
                    }`}>
                      {product.stock || 0}
                    </span>
                  </div>
                </td>
                
                {/* Category - Hidden on smaller screens */}
                <td className="hidden lg:table-cell px-4 py-4 text-center w-28 xl:w-32">
                  <div className="flex justify-center">
                    <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                      {product.category || 'Uncategorized'}
                    </span>
                  </div>
                </td>
                
                {/* Actions */}
                <td className="px-4 py-4 text-center w-28 lg:w-32">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <button
                      onClick={() => onView(product)}
                      className="w-full px-2 py-1 text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      View
                    </button>
                    <button
                      onClick={() => onEdit(product)}
                      className="w-full px-2 py-1 text-xs font-medium bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center text-gray-500 py-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🚫</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-medium text-gray-700">No products found</span>
                    <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or add some products</p>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* Mobile View - Card Layout */}
    <div className="md:hidden flex-1 overflow-y-auto">
      <div className="p-4 space-y-4">
        {paginated.length && FilterStatus.length > 0 ? (
          paginated.map((product, index) => (
            <div 
              key={product._id} 
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Card Header with Checkbox and Image */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                <input
                  type="checkbox"
                  checked={selected.includes(product.Sku)}
                  onChange={() => toggleSelect(product.Sku)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.ProductName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">No img</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{product.ProductName}</h3>
                  <p className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                    {product.Sku}
                  </p>
                </div>
              </div>

              {/* Card Content - Centered Data */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Price</span>
                  <div className="mt-1">
                    <span className="text-lg font-bold text-green-600">₹{product.MRP}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Stock</span>
                  <div className="mt-1">
                    <span className={`inline-flex px-2 py-1 text-sm font-bold rounded-full ${
                      (product.stock || 0) > 10 
                        ? 'bg-green-100 text-green-800' 
                        : (product.stock || 0) > 0 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock || 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* Category - Centered */}
              <div className="text-center mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</span>
                <div className="mt-1">
                  <span className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                    {product.category || "Uncategorized"}
                  </span>
                </div>
              </div>

              {/* Action Buttons - Centered */}
              <div className="flex justify-center gap-2 pt-3 border-t border-gray-100">
                <button 
                  onClick={() => onView(product)} 
                  className="flex-1 max-w-[100px] px-3 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  View
                </button>
                <button 
                  onClick={() => onEdit(product)} 
                  className="flex-1 max-w-[100px] px-3 py-2 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🚫</span>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-sm text-gray-500">Try adjusting your filters or add some products</p>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Enhanced Pagination - Sticky Bottom */}
  {paginated.length > 0 && (
    <div className="sticky bottom-0 z-10 bg-white border-t-2 border-gray-200 shadow-lg">
      <div className="px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
        
        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          <Button 
            disabled={page === 0} 
            onClick={() => setPage(page - 1)} 
            size="sm" 
            variant="outline" 
            className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50"
          >
            <ChevronLeftSquareIcon size={16} />
          </Button>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-md border">
            <span className="text-sm text-gray-600 font-medium">Page</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-bold min-w-[28px] text-center border border-blue-200">
              {page + 1}
            </span>
            <span className="text-sm text-gray-600">of</span>
            <span className="text-sm font-bold text-gray-700">
              {Math.ceil(products.length / rowsPerPage)}
            </span>
          </div>
          
          <Button 
            disabled={(page + 1) * rowsPerPage >= products.length} 
            onClick={() => setPage(page + 1)} 
            size="sm" 
            variant="outline" 
            className="h-8 w-8 p-0 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50"
          >
            <ChevronRightSquareIcon size={16} />
          </Button>
        </div>

        {/* Results Info */}
        <div className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-md border">
          <span className="font-medium">
            Showing {page * rowsPerPage + 1} - {Math.min((page + 1) * rowsPerPage, products.length)}
          </span>
          <span className="mx-1">of</span>
          <span className="font-bold text-gray-700">{products.length}</span>
          <span className="ml-1">products</span>
        </div>
      </div>
    </div>
  )}
</section>


  )
}

export default ProductTable
