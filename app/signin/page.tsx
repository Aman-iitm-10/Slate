"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import image from "/public/6709673.png";


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
      <div className=" relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {roles.map((role) => (
          <div
            key={role}
            className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg text-center"
            onClick={() => handleRoleSelect(role)}
          >
            {/* <img src="/6709673.png" className="absolute t-50"/> */}
            <h2 className="text-xl font-semibold">{role}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

