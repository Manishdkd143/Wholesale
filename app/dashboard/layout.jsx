import React from 'react'
import Sidebar from '@/features/admin/Sidebar'
const dashboardLayout = ({children}) => {
  return (
 
    <div className="min-h-screen flex ">
      <main className="flex-1">
        {children} 
      </main>
    </div>
  )
}
export default dashboardLayout;