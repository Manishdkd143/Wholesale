'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from '@/features/admin/Components/Sidebar'

const ProductLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className="relative flex h-screen w-full bg-gray-50">
      {/* Sidebar is fixed on mobile, relative on desktop */}
      <Sidebar />

      {/* Main content */}
      <main
        className={`
          flex-1 overflow-y-auto transition-all duration-300
          ${isMobile ? 'pt-10' : ''}
        `}
      >
        {children}
      </main>
    </div>
  )
}

export default ProductLayout
