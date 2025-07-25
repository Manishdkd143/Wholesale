"use client";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

import StockFilter from "./Filters/StockFilter";

const Searchbar = ({
  placeholder = "Search...",
  onSearch,
  filterOptions = ["All", "Name", "SKU"],
  debounceDelay = 300,
  products,
 onStockFilter,
}) => {
    const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [stockStatus, setStockStatus] = useState("All Stock");

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [query, debounceDelay]);


  useEffect(() => {
    if (!onSearch) return;

    const searchText = debouncedQuery.trim().toLowerCase();

    let filtered = [];
    switch (stockStatus) {
      case "In Stock":
        filtered = products.filter((p) => p.Stock > 10);
        break;
      case "Low Stock":
        filtered = products.filter((p) => p.Stock > 0 && p.Stock <= 10);
        break;
      case "Out Stock":
        filtered = products.filter((p) => p.Stock === 0);
        break;
      case "All Stock":
      default:
        filtered = products;
        break;
    }

 
    switch (selectedFilter) {
      case "Name":
        filtered = filtered.filter((p) =>
          p.ProductName?.toLowerCase().includes(searchText)
        );
        break;
      case "SKU":
        filtered = filtered.filter((p) =>
          p.Sku?.toLowerCase().includes(searchText)
        );
        break;
        case "All":
      default:
        filtered=filtered.filter((p)=>p.ProductName?.toLowerCase().includes(searchText)||p.Sku?.toLowerCase().includes(searchText))
        break;
    }

    onSearch(filtered);
  }, [debouncedQuery, selectedFilter, stockStatus, products]);


  const handleStockFilter = (status) => {
    setStockStatus(status);
  };


  return (
    <div className="flex flex-row sm:flex-row gap-6  max-w-2xl items-center justify-between ">
      {/* Dropdown filter */}
      <div className="flex flex-row gap-2 w-full">
      <select
        value={selectedFilter}
        id={selectedFilter}
        onChange={(e) =>setSelectedFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-1 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 "
      >
        {filterOptions.map((option) => (
          <option key={option} value={option} className="">
            {option}
          </option>
        ))}
      </select>

      {/* Search input */}
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          id={"in01"}
          onChange={(e) =>setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 shadow-sm "
        />
     <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 "
          size={18}
        />
      </div>
      </div>
      {/* Stocks option */}
      <div className="">
      <StockFilter onFilter={handleStockFilter} />
      </div>
    </div>
  );
};

export default Searchbar;
