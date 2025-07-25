"use client";
import { useState, useEffect } from "react";
import {
  Plus,
  SlidersHorizontal,
  MoreVertical,
  ChevronRightSquareIcon,
  ChevronLeftSquareIcon,
  Pen,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StockFilter from "./Filter/StockFilter";
import { useRouter } from "next/navigation";
// const customers = [
//   {
//     id: "#CUST001",
//     name: "Aarav Mehta",
//     phone: "9876543210",
//     email: "aarav.mehta@example.com",
//     address: "12 MG Road, Pune, Maharashtra 411001",
//     status: "Yes",
//   },
//   {
//     id: "#CUST002",
//     name: "Ishita Sharma",
//     phone: "8765432109",
//     email: "ishita.sharma@example.com",
//     address: "45 Lajpat Nagar, New Delhi, 110024",
//     status: "No",
//   },
//   {
//     id: "#CUST003",
//     name: "Kabir Kapoor",
//     phone: "7654321098",
//     email: "kabir.kapoor@example.com",
//     address: "78 Park Street, Kolkata, West Bengal 700016",
//     status: "Yes",
//   },
//   {
//     id: "#CUST004",
//     name: "Saanvi Verma",
//     phone: "6543210987",
//     email: "saanvi.verma@example.com",
//     address: "11 Residency Road, Bengaluru, Karnataka 560025",
//     status: "No",
//   },
//   {
//     id: "#CUST005",
//     name: "Vivaan Desai",
//     phone: "5432109876",
//     email: "vivaan.desai@example.com",
//     address: "23 Ashram Road, Ahmedabad, Gujarat 380014",
//     status: "Yes",
//   },
//   {
//     id: "#CUST006",
//     name: "Meera Joshi",
//     phone: "4321098765",
//     email: "meera.joshi@example.com",
//     address: "89 Lake Road, Bhopal, Madhya Pradesh 462001",
//     status: "No",
//   },
//   {
//     id: "#CUST007",
//     name: "Rohan Gupta",
//     phone: "3210987654",
//     email: "rohan.gupta@example.com",
//     address: "9 Civil Lines, Jaipur, Rajasthan 302006",
//     status: "Yes",
//   },
//   {
//     id: "#CUST008",
//     name: "Diya Rao",
//     phone: "2109876543",
//     email: "diya.rao@example.com",
//     address: "101 Beach Road, Chennai, Tamil Nadu 600005",
//     status: "No",
//   },
//   {
//     id: "#CUST009",
//     name: "Aryan Singh",
//     phone: "1098765432",
//     email: "aryan.singh@example.com",
//     address: "67 Cantonment, Lucknow, Uttar Pradesh 226002",
//     status: "Yes",
//   },
//   {
//     id: "#CUST010",
//     name: "Ananya Iyer",
//     phone: "9988776655",
//     email: "ananya.iyer@example.com",
//     address: "22 Boat Club Road, Pune, Maharashtra 411001",
//     status: "No",
//   },
//   {
//     id: "#CUST011",
//     name: "Krishna Das",
//     phone: "8877665544",
//     email: "krishna.das@example.com",
//     address: "34 Salt Lake, Kolkata, West Bengal 700064",
//     status: "Yes",
//   },
//   {
//     id: "#CUST012",
//     name: "Tanya Malhotra",
//     phone: "7766554433",
//     email: "tanya.malhotra@example.com",
//     address: "56 Model Town, Ludhiana, Punjab 141002",
//     status: "No",
//   },
//   {
//     id: "#CUST013",
//     name: "Aditya Chauhan",
//     phone: "6655443322",
//     email: "aditya.chauhan@example.com",
//     address: "12 NIT, Faridabad, Haryana 121001",
//     status: "Yes",
//   },
//   {
//     id: "#CUST014",
//     name: "Pooja Reddy",
//     phone: "5544332211",
//     email: "pooja.reddy@example.com",
//     address: "88 Banjara Hills, Hyderabad, Telangana 500034",
//     status: "No",
//   },
//   {
//     id: "#CUST015",
//     name: "Neeraj Mishra",
//     phone: "4433221100",
//     email: "neeraj.mishra@example.com",
//     address: "90 MG Marg, Allahabad, Uttar Pradesh 211001",
//     status: "Yes",
//   },
//   {
//     id: "#CUST016",
//     name: "Sneha Patil",
//     phone: "3322110099",
//     email: "sneha.patil@example.com",
//     address: "14 Shivaji Nagar, Nashik, Maharashtra 422005",
//     status: "No",
//   },
//   {
//     id: "#CUST017",
//     name: "Rahul Nair",
//     phone: "2211009988",
//     email: "rahul.nair@example.com",
//     address: "5 Vyttila, Kochi, Kerala 682019",
//     status: "Yes",
//   },
//   {
//     id: "#CUST018",
//     name: "Kriti Sharma",
//     phone: "1100998877",
//     email: "kriti.sharma@example.com",
//     address: "67 Sector 22, Chandigarh, 160022",
//     status: "No",
//   },
//   {
//     id: "#CUST019",
//     name: "Harsh Vardhan",
//     phone: "9998887776",
//     email: "harsh.vardhan@example.com",
//     address: "23 Alkapuri, Vadodara, Gujarat 390007",
//     status: "Yes",
//   },
//   {
//     id: "#CUST020",
//     name: "Ila Saxena",
//     phone: "8887776665",
//     email: "ila.saxena@example.com",
//     address: "70 Hazaratganj, Lucknow, Uttar Pradesh 226001",
//     status: "No",
//   },
// ];

const CustomerList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers,setCustomers]=useState([]);
    const [selected, setSelected] = useState("Name");
  const [filteredCust, setFilteredCust] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const router=useRouter();
  useEffect(() => {
   const fetchCust=async()=>{
  const res=await fetch('api/customers');
  const result=await res.json()
  if(result.success){
    setCustomers(result.customer)
  }else{
   console.error(result.message);
  }
   }
   fetchCust();
  }, [customers])
  useEffect(() => {
    let filtered = [];
    if (searchQuery) {
      switch (selected) {
        case "Name":
          filtered = customers.filter((cust) =>
            cust.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          break;
        case "Phone":
          filtered = customers.filter((cust) =>
            cust.phone.includes(searchQuery)
          );
          break;
        case "Email":
          filtered = customers.filter((cust) =>
            cust.email.toLowerCase().includes(searchQuery.toLowerCase())
          );
          break;
        default:
          break;
      }
    }

    setFilteredCust(filtered);
  }, [searchQuery, selected]);

  const handledelete=async(id)=>{
   const confirmation=window.confirm("Are you sure you want to delete this customer?");
   if(!confirmation) return;
   try {
     const res=await fetch(`/api/customers/${id}`,{
    method:"DELETE"
   })
   const result=await res.json();
   if(result.success){
    console.log("Deleted:",result.data)
   }else{
    console.log("Failed",result.message);
   }
   } catch (error) {
    console.log(error)
   }
  }
  const handleEdit=(id)=>{
    router.push(`/customers/edit/${id}`);
  }



const isSearching=searchQuery.trim().length>0;

const activeList=isSearching?filteredCust:customers;

  const paginated =activeList.slice(page*rowsPerPage,(page+1)*rowsPerPage);

  return (
    <main className="w-full min-h-screen px-4 md:px-6 py-5 md:py-10 ">
     <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-4">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Customers</h1>

  
  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
    
    {/* Search + Filter */}
    <div className="flex flex-row sm:flex-row items-stretch sm:items-center gap-2 w-full">
      {/* Search Box */}
      <div className="relative w-full sm:w-72">
        <span className="absolute left-2.5 top-2.5 text-gray-500">
          <SlidersHorizontal size={16} />
        </span>
        <input
          type="text"
          placeholder={`Search by ${selected.toLowerCase()}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 pr-4 py-2 w-full border rounded-lg text-sm border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Search customers"
        />
      </div>

      {/* Filter Dropdown */}
      <div className="w-fit sm:w-auto">
        <StockFilter
          filterOption={["Name", "Phone", "Email"]}
          selectedFilter={(val) => {
            setSelected(val);
            setSearchQuery("");
          }}
        />
      </div>
    </div>

    {/* Add Button */}
    <div className="w-full sm:w-auto ">
      <Link href="/customers/addcustomer/">
        <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 text-sm cursor-pointer">
          <Plus size={16} />
          Add
        </Button>
      </Link>
    </div>
  </div>
</header>


      <section className="bg-white rounded-lg shadow-sm overflow-x-auto">
  <table className="min-w-full text-sm text-left md:table hidden">
    <thead className="bg-gray-100 border-b text-gray-700 uppercase">
      <tr>
        <th className="px-4 py-3">ID</th>
        <th className="px-4 py-3">Name</th>
        <th className="px-4 py-3">Phone</th>
        <th className="px-4 py-3">Email</th>
        <th className="px-4 py-3">Address</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3 text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        isSearching && filteredCust.length===0 ? (
          <tr>
         <td colSpan={4} className="text-center text-gray-500 py-6">
          🚫 Product Not Found
        </td>
      </tr>
        ):(
          paginated.map((cust,i)=>(
            <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3">{cust.customerID}</td>
          <td className="px-4 py-3">{cust.name}</td>
          <td className="px-4 py-3">{cust.phone}</td>
          <td className="px-4 py-3">{cust.email}</td>
          <td className="px-4 py-3 whitespace-nowrap">{cust.address}</td>
          <td className="px-4 py-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                cust.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {cust.status}
            </span>
          </td>
          <td className="px-4 py-3 text-center flex gap-3 items-center justify-end ">
            <button className="text-black cursor-pointer" onClick={()=>handleEdit(cust.customerID)}>
             <Pen size={20}/>
            </button>
             <button className="text-black cursor-pointer" onClick={()=>handledelete(cust.customerID)}>
             <Trash2Icon size={20}/>
            </button>
          </td>
        </tr>
          ))
         
        )
      }
     
    
     
      
    </tbody>
  </table>

  {/* Mobile-friendly card layout */}
  <div className="md:hidden flex flex-col gap-4 px-2">
    {isSearching&&filteredCust.length===0?(
 <tr>
        <td colSpan={4} className="text-center text-gray-500 py-6">
          🚫 Product Not Found
        </td>
      </tr>
    ):(
 paginated.map((cust,i)=>(
  <div key={i} className="border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">ID</span>
          <span className="text-sm font-medium">{cust.id}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">Name</span>
          <span className="text-sm font-medium">{cust.name}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">Phone</span>
          <span className="text-sm font-medium">{cust.phone}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">Email</span>
          <span className="text-sm font-medium">{cust.email}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">Address</span>
          <span className="text-sm font-medium text-right">{cust.address}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">Status</span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              cust.status === "Yes"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {cust.status}
          </span>
        </div>
        <div className="flex justify-end mt-2 gap-2">
          <button className="text-black" onClick={()=>router.push(`/customers/edit/${cust.customerID}`)}>
             <Pen size={15}/>
            </button>
             <button className="text-black" onClick={()=>handledelete(cust.customerID)}>
             <Trash2Icon size={15}/>
            </button>
        </div>
      </div>
 ))
    )
  }
   
  </div>

  {/* Pagination */}
  {paginated.length>0 && (
    <div className="w-full flex justify-center items-center mt-8">
      <div className="flex gap-3">
        <Button variant="secondary"
        size={10}
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className=" text-black p-1"
        >
          <ChevronLeftSquareIcon size={24} />
        </Button>
        <span className={`p-2 text-sm font-medium bg-gray-100 rounded-md `}>
          {page + 1}
        </span>
        <Button
         variant="secondary"
        size={10}
          disabled={(page + 1) * rowsPerPage >= activeList.length}
          onClick={() => setPage(page + 1)}
          className="text-black p-1"
        >
          <ChevronRightSquareIcon size={24} />
        </Button>
      </div>
    </div>
  )}
</section>

    </main>
  );
};

export default CustomerList;
