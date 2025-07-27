"use client";
import { Bell, User2, AlignJustify, X } from "lucide-react";
import RevenueLineChart from "../Components/Revenue";
import TopSellingProducts from "../Components/TopSellingProduct";
import RecentOrders from "../Components/RecentOrder";
import Sidebar from "../../Components/Sidebar";
import { useState } from "react";

const AdminDashboard = () => {
  const [sidebtn, setSideBtn] = useState(false);
  return (
    <div className="">
      {/* Main content */}
      <main className=" p-2 bg-gray-100 overflow-y-auto h-screen">
        <div className="flex flex-col space-y-4">
          {/* Header */}
          <header className="flex justify-between items-center flex-wrap gap-2 p-2 bg-white shadow rounded">
            <div className="flex gap-2 items-center">

             
              <h2 className="text-gray-800 font-bold text-2xl">Dashboard</h2>
            </div>
           
          </header>

          {/* Stat Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-medium text-black">Total Sales</h2>
              <h2 className="text-2xl text-black">$25,000</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-medium text-black">Orders</h2>
              <h2 className="text-2xl text-black">$2,000</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-sm font-medium text-black">Customers</h2>
              <h2 className="text-2xl text-black">500</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-medium text-black">Low Stock</h2>
                  <h2 className="text-2xl text-black">12</h2>
                </div>
                <button className="bg-green-100 px-4 py-2 rounded-xl text-black text-sm">
                  View
                </button>
              </div>
            </div>
          </section>

          {/* Charts Section */}
          <section className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2 w-full bg-white p-4 rounded-lg shadow">
              <RevenueLineChart className="w-full h-full" />
            </div>
            <div className="lg:w-1/2 w-full bg-white p-4 rounded-lg shadow">
              <TopSellingProducts className="w-full h-full" />
            </div>
          </section>

          {/* Recent Orders */}
          <section className="bg-white p-4 rounded-lg shadow">
            <RecentOrders />
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
