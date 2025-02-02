import type { ReactNode } from "react"

interface DashboardProps {
  role: string
  children: ReactNode
}

export default function Dashboard({ role, children }: DashboardProps) {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">{children}</div>
    </div>
  )
}

