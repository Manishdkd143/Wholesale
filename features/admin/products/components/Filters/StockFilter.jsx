"use client"
import {React,useEffect,useState} from 'react'

const StockFilter = ({onFilter,stockFilterOption=["All Stock","In Stock","Low Stock","Out Stock"]}) => {
    const [stockStatus,setStockStatus]=useState("All Stock");
useEffect(()=>{
onFilter("All Stock");
},[])
    const handleSelected=(e)=>{
      const selected=e.target.value;
      setStockStatus(selected);
      onFilter(selected)
    }
    return (
       <select  value={stockStatus}   onChange={handleSelected} className="border border-gray-300 rounded-lg px-1 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400">
         {stockFilterOption.map((option)=>(
          <option key={option} value={option}>{option}</option>
         ))}
         </select>
  )
}

export default StockFilter
