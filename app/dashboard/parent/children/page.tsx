"use client"

import { useAuth } from "@/app/contexts/AuthContext"
import Dashboard from "@/app/components/Dashboard"

export default function ParentChildren() {
  const { isAuthenticated, userRole } = useAuth()

  if (!isAuthenticated || userRole !== "parent") {
    return null
  }

  return (
    <Dashboard role="parent">
      <h2 className="text-2xl font-semibold mb-4">Your Children</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p>Grade: 8</p>
          <p>Teacher: Mr. Smith</p>
          <p>Recent Performance: Excellent</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
          <p>Grade: 5</p>
          <p>Teacher: Ms. Johnson</p>
          <p>Recent Performance: Good</p>
        </div>
      </div>
    </Dashboard>
  )
}

