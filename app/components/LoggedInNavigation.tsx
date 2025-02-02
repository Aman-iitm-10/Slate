"use client"

import { useState } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useAuth } from "../contexts/AuthContext"

interface NavItem {
  title: string
  path: string
}

const roleNavItems: Record<string, NavItem[]> = {
  student: [
    { title: "Dashboard", path: "/dashboard/student" },
    { title: "Assignments", path: "/dashboard/student/assignments" },
    // Add more student-specific pages here
  ],
  school: [
    { title: "Dashboard", path: "/dashboard/school" },
    { title: "Students", path: "/dashboard/school/students" },
    // Add more school-specific pages here
  ],
  parent: [
    { title: "Dashboard", path: "/dashboard/parent" },
    { title: "Children", path: "/dashboard/parent/children" },
    // Add more parent-specific pages here
  ],
  admin: [
    { title: "Dashboard", path: "/dashboard/admin" },
    { title: "Schools", path: "/dashboard/admin/schools" },
    // Add more admin-specific pages here
  ],
}

export default function LoggedInNavigation({ toggleDarkMode }: { toggleDarkMode: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { userRole, logout } = useAuth()

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
    toggleDarkMode()
  }

  const navItems = userRole ? roleNavItems[userRole] : []

  return (
    <nav className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={`/dashboard/${userRole}`} className="text-xl font-bold">
              {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)} Dashboard
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.title}
                </Link>
              ))}
              <button
                onClick={logout}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleDarkModeToggle}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={() => {
                logout()
                setMobileMenuOpen(false)
              }}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

