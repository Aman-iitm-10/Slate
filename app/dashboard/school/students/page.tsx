"use client"

import { useAuth } from "@/app/contexts/AuthContext"
import Dashboard from "@/app/components/Dashboard"

export default function SchoolStudents() {
  const { isAuthenticated, userRole } = useAuth()

  if (!isAuthenticated || userRole !== "school") {
    return null
  }

  return (
    <Dashboard role="school">
      <h2 className="text-2xl font-semibold mb-4">Student Directory</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Grade</th>
            <th className="p-2 text-left">Parent/Guardian</th>
            <th className="p-2 text-left">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">John Doe</td>
            <td className="p-2">8</td>
            <td className="p-2">Jane Doe</td>
            <td className="p-2">jane.doe@email.com</td>
          </tr>
          <tr>
            <td className="p-2">Alice Smith</td>
            <td className="p-2">7</td>
            <td className="p-2">Bob Smith</td>
            <td className="p-2">bob.smith@email.com</td>
          </tr>
          <tr>
            <td className="p-2">Emma Johnson</td>
            <td className="p-2">6</td>
            <td className="p-2">Michael Johnson</td>
            <td className="p-2">michael.johnson@email.com</td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  )
}

