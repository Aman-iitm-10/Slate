"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Dashboard from "@/app/components/Dashboard"
import { useAuth } from "@/app/contexts/AuthContext"

export default function SchoolDashboard() {
  const { isAuthenticated, userRole } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || userRole !== "school") {
      router.push("/")
    }
  }, [isAuthenticated, userRole, router])

  if (!isAuthenticated || userRole !== "school") {
    return null
  }

  return (
    <Dashboard role="school">
      <h2 className="text-2xl font-semibold mb-4">Welcome, School Administrator!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">School Statistics</h3>
          <ul className="list-disc list-inside">
            <li>Total Students: 1,200</li>
            <li>Total Teachers: 80</li>
            <li>Average Attendance: 95%</li>
          </ul>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
          <ul className="list-disc list-inside">
            <li>Parent-Teacher Conference - Next week</li>
            <li>Science Fair - In 2 weeks</li>
            <li>Sports Day - Next month</li>
          </ul>
        </div>
      </div>
    </Dashboard>
  )
}

