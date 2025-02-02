"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const roles = ["Student", "School", "Parent", "Admin"]

export default function SignIn() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role)
    router.push(`/login/${role.toLowerCase()}`)
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Select Your Role</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {roles.map((role) => (
          <div
            key={role}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg text-center"
            onClick={() => handleRoleSelect(role)}
          >
            <h2 className="text-xl font-semibold">{role}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

