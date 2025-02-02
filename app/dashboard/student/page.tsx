"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Dashboard from "@/app/components/Dashboard"
import { useAuth } from "@/app/contexts/AuthContext"

export default function StudentDashboard() {
  const { isAuthenticated, userRole } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || userRole !== "student") {
      router.push("/")
    }
  }, [isAuthenticated, userRole, router])

  if (!isAuthenticated || userRole !== "student") {
    return null
  }

  return (
    <Dashboard role="student">
      <h2 className="text-2xl font-semibold mb-4">Welcome, Student!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Upcoming Assignments</h3>
          <ul className="list-disc list-inside">
            <li>Math homework - Due Friday</li>
            <li>Science project - Due next week</li>
            <li>English essay - Due in 2 weeks</li>
          </ul>
        </div>
        <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Recent Grades</h3>
          <ul className="list-disc list-inside">
            <li>Math Quiz: 90%</li>
            <li>History Test: 85%</li>
            <li>Science Lab: 95%</li>
          </ul>
        </div>
      </div>
    </Dashboard>
  )
}

