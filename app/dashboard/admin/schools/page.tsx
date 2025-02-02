"use client"

import { useAuth } from "@/app/contexts/AuthContext"
import Dashboard from "@/app/components/Dashboard"

export default function AdminSchools() {
  const { isAuthenticated, userRole } = useAuth()

  if (!isAuthenticated || userRole !== "admin") {
    return null
  }

  return (
    <Dashboard role="admin">
      <h2 className="text-2xl font-semibold mb-4">Registered Schools</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 text-left">School Name</th>
            <th className="p-2 text-left">Location</th>
            <th className="p-2 text-left">Principal</th>
            <th className="p-2 text-left">Total Students</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Springfield Elementary</td>
            <td className="p-2">Springfield, IL</td>
            <td className="p-2">Seymour Skinner</td>
            <td className="p-2">500</td>
          </tr>
          <tr>
            <td className="p-2">Riverdale High</td>
            <td className="p-2">Riverdale, NY</td>
            <td className="p-2">Weatherbee</td>
            <td className="p-2">1200</td>
          </tr>
          <tr>
            <td className="p-2">South Park Elementary</td>
            <td className="p-2">South Park, CO</td>
            <td className="p-2">Victoria</td>
            <td className="p-2">300</td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  )
}

