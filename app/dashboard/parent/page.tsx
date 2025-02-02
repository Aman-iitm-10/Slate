"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Dashboard from "@/app/components/Dashboard"
import { useAuth } from "@/app/contexts/AuthContext"

export default function ParentDashboard() {
  const { isAuthenticated, userRole } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated || userRole !== "parent") {
      router.push("/")
    }
  }, [isAuthenticated, userRole, router])

  if (!isAuthenticated || userRole !== "parent") {
    return null
  }

  return (
    <Dashboard role="parent">
      <h2 className="text-2xl font-semibold mb-4">Welcome, Parent!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-100 dark:bg-indigo-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Your Children</h3>
          <ul className="list-disc list-inside">
            <li>John Doe - Grade 8</li>
            <li>Jane Doe - Grade 5</li>
          </ul>
        </div>
        <div className="bg-pink-100 dark:bg-pink-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Upcoming School Events</h3>
          <ul className="list-disc list-inside">
            <li>Parent-Teacher Conference - Next week</li>
            <li>School Play - In 3 weeks</li>
            <li>Field Trip - Next month</li>
          </ul>
        </div>
      </div>
    </Dashboard>
  )
}

