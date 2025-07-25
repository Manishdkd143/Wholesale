import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  ChevronDown,
  Plus,
  Search,
  Settings,
  Bell,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [expandedItems, setExpandedItems] = useState({});

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      badge: null
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      href: '/products',
      badge: '24',
      subItems: [
        { label: 'All Products', href: '/products' },
        { label: 'Add Product', href: '/products/add' },
        { label: 'Categories', href: '/products/categories' },
        { label: 'Inventory', href: '/products/inventory' }
      ]
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: ShoppingCart,
      href: '/orders',
      badge: '12',
      subItems: [
        { label: 'All Orders', href: '/orders' },
        { label: 'Pending', href: '/orders/pending' },
        { label: 'Completed', href: '/orders/completed' },
        { label: 'Cancelled', href: '/orders/cancelled' }
      ]
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: Users,
      href: '/customers',
      badge: '1.2k',
      subItems: [
        { label: 'All Customers', href: '/customers' },
        { label: 'Add Customer', href: '/customers/add' },
        { label: 'Customer Groups', href: '/customers/groups' }
      ]
    }
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    if (item.subItems) {
      toggleExpanded(item.id);
    }
  };

  return (
    <div className={`bg-white shadow-xl transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'} flex flex-col h-screen`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800">AdminPro</h1>
                <p className="text-sm text-gray-500">Dashboard</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          const isExpanded = expandedItems[item.id];
          
          return (
            <div key={item.id} className="space-y-1">
              {/* Main Item */}
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </div>
                
                {!isCollapsed && (
                  <div className="flex items-center space-x-2">
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {item.subItems && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        } ${isActive ? 'text-white' : 'text-gray-400'}`}
                      />
                    )}
                  </div>
                )}
              </button>

              {/* Sub Items */}
              {item.subItems && !isCollapsed && isExpanded && (
                <div className="ml-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {item.subItems.map((subItem, index) => (
                    <a
                      key={index}
                      href={subItem.href}
                      className="flex items-center space-x-3 p-2 pl-8 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors"></div>
                      <span className="text-sm">{subItem.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Quick Actions */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white">
            <h3 className="font-semibold mb-2">Quick Actions</h3>
            <div className="space-y-2">
              <a
                href="/products/add"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <Plus size={16} />
                <span className="text-sm">Add Product</span>
              </a>
              <a
                href="/customers/add"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <Plus size={16} />
                <span className="text-sm">Add Customer</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        {!isCollapsed ? (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium">JD</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
            <div className="flex space-x-1">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell size={16} className="text-gray-500" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Settings size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        ) : (
          <button className="w-full p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings size={20} className="text-gray-500 mx-auto" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;