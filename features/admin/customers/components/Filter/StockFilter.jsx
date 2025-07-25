import React from 'react';
import { Filter } from 'lucide-react';

const StockFilter = ({ filterOption = [], selectedFilter }) => {
  return (
    <div className="  h-full flex items-center gap-2">
      <div className="flex items-center border  rounded-lg p-2 md:px-3 md:py-2 text-sm hover:bg-gray-100">
        <Filter size={16} className="md:mr-2  text-gray-600 hidden md:block" />
        <select
          className="bg-transparent outline-none text-sm text-gray-700"
          onChange={(e) => selectedFilter(e.target.value)}
        >
          {filterOption.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StockFilter;
