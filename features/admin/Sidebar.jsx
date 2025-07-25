"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddCustomer = () => {
  const router = useRouter();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    gstNumber: "",
    status: "Active",
    notes: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });

    const data = await res.json();
    if (data.success) {
      router.push("/admin/customers");
    } else {
      alert("Failed to add customer");
    }
  };

  return (
    <div className="w-full min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Customer</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={customer.name}
              onChange={handleChange}
              placeholder="Customer name"
              className="form-input"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone *</label>
            <input
              type="text"
              name="phone"
              required
              value={customer.phone}
              onChange={handleChange}
              placeholder="Mobile number"
              className="form-input"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Email address"
              className="form-input"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">GST Number</label>
            <input
              type="text"
              name="gstNumber"
              value={customer.gstNumber}
              onChange={handleChange}
              placeholder="GSTIN"
              className="form-input"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={customer.address}
              onChange={handleChange}
              placeholder="Full address"
              rows={2}
              className="form-input"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block mb-1 font-medium">City</label>
              <input
                name="city"
                value={customer.city}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">State</label>
              <input
                name="state"
                value={customer.state}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Pincode</label>
              <input
                name="pincode"
                value={customer.pincode}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="status"
              value={customer.status}
              onChange={handleChange}
              className="form-input"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Notes</label>
            <textarea
              name="notes"
              value={customer.notes}
              onChange={handleChange}
              placeholder="Internal admin notes"
              rows={3}
              className="form-input"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 w-full text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              ➕ Add Customer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
