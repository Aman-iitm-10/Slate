"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Dashboard from "@/app/components/Dashboard"
import { useAuth } from "@/app/contexts/AuthContext"

export default function AdminDashboard() {
  const { isAuthenticated, userRole } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || userRole !== "admin") {
      router.push("/")
    }
  }, [isAuthenticated, userRole, router])

  if (!isAuthenticated || userRole !== "admin") {
    return null
  }

  return (
    <Dashboard role="admin">
      <h2 className="text-2xl font-semibold mb-4">Welcome, Administrator!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-100 dark:bg-red-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">System Overview</h3>
          <ul className="list-disc list-inside">
            <li>Total Users: 5,000</li>
            <li>Active Schools: 50</li>
            <li>System Uptime: 99.9%</li>
          </ul>
        </div>
        <div className="bg-teal-100 dark:bg-teal-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
          <ul className="list-disc list-inside">
            <li>New school added - Yesterday</li>
            <li>System update - 3 days ago</li>
            <li>Data backup - 1 week ago</li>
          </ul>
        </div>
      </div>
    </Dashboard>
  )
}

