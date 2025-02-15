"use client"

import { useState } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useAuth } from "../contexts/AuthContext"
import LoggedInNavigation from "./LoggedInNavigation"
import "./try.css"

const publicNavItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
]

export default function Navigation({ toggleDarkMode }: { toggleDarkMode: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { isAuthenticated, userRole } = useAuth()

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
    toggleDarkMode()
  }

  if (isAuthenticated && userRole) {
    return <LoggedInNavigation toggleDarkMode={toggleDarkMode} />
  }

  const navItems = [...publicNavItems, { title: "Sign In", path: "/signin" }]

  return (
    <nav className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Slate IITM
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
          <div className="px-2  pt-2 pb-3 space-y-1 sm:px-3">
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
          </div>
        </div>
      )}
    </nav>
  )
}

