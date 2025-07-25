'use client'
import { useEffect, useState } from 'react';
import { useRouter,useParams } from 'next/navigation';

const EditCustomer = () => {
  const { id } = useParams();
  const router = useRouter();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    status: 'Active',
  });
const handleBack = () => {
  router.back();
}
  // ✅ Fetch customer data on mount
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await fetch(`/api/customers/${id}`);
        const data = await res.json();
        if (data.success) {
          setCustomer(data.data);
        } else {
          alert('Customer not found');
        }
      } catch (err) {
        console.error('Error fetching:', err);
        alert('Error loading customer');
      }
    };

    if (id) fetchCustomer();
  }, [id]);

  // ✅ Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/customers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });

      const data = await res.json();
      if (data.success) {
        alert('Customer updated ✅');
        router.push('/customers');
      } else {
        alert('Update failed: ' + data.message);
      }
    } catch (err) {
      console.error('Update error:', err);
      alert('Error updating customer');
    }
  };

  return (
 <div className="min-h-screen w-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 p-1 sm:p-1 lg:p-6">
      <div className="max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto pt-1 sm:pt-4">
        <div className="bg-white rounded-lg shadow-xl p-3 sm:p-4 lg:p-6 ">
          {/* Back Button */}
          <div className="flex items-center mb-4 sm:mb-6">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors duration-200 group text-sm sm:text-base"
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back</span>
            </button>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">Edit Customer</h1>
            <p className="text-sm sm:text-base text-gray-600">Update customer information</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Customer ID</label>
              <input
                type="text"
                name="customerId"
                value={customer.customerID}
                onChange={handleChange}
                readOnly
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50"
                placeholder="Enter customer ID"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Customer Name</label>
              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter customer name"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter phone number"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={customer.address}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Status</label>
              <select
                name="status"
                value={customer.status}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 cursor-pointer text-sm sm:text-base mt-6 sm:mt-8"
            >
              Update Customer
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default EditCustomer