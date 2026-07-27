'use client'

import { useState } from 'react'
import { LoginPage } from '@/components/pages/LoginPage'
import { DashboardPage } from '@/components/pages/DashboardPage'

export interface UserData {
  email: string
  name: string
  password: string
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [userData, setUserData] = useState<UserData | null>(null)

  const handleLogin = (email: string, password: string) => {
    // Generate user name from email
    const name = email.split('@')[0].split('.').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
    
    setUserData({
      email,
      name,
      password,
    })
    setIsAuthenticated(true)
  }

  if (!isAuthenticated || !userData) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <DashboardPage 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      userData={userData}
    />
  )
}
