"use client"

import { useAuth } from "@/app/contexts/AuthContext"
import Dashboard from "@/app/components/Dashboard"

export default function StudentAssignments() {
  const { isAuthenticated, userRole } = useAuth()

  if (!isAuthenticated || userRole !== "student") {
    return null
  }

  return (
    <Dashboard role="student">
      <h2 className="text-2xl font-semibold mb-4">Your Assignments</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 text-left">Subject</th>
            <th className="p-2 text-left">Assignment</th>
            <th className="p-2 text-left">Due Date</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Math</td>
            <td className="p-2">Algebra Worksheet</td>
            <td className="p-2">2023-06-15</td>
            <td className="p-2">Pending</td>
          </tr>
          <tr>
            <td className="p-2">Science</td>
            <td className="p-2">Lab Report</td>
            <td className="p-2">2023-06-20</td>
            <td className="p-2">In Progress</td>
          </tr>
          <tr>
            <td className="p-2">English</td>
            <td className="p-2">Book Report</td>
            <td className="p-2">2023-06-25</td>
            <td className="p-2">Not Started</td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  )
}

