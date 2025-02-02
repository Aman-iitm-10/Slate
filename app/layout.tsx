"use client"

import { Inter } from "next/font/google"
import { useState } from "react"
import Navigation from "./components/Navigation"
import LoggedInNavigation from "./components/LoggedInNavigation"
import { AuthProvider } from "./contexts/AuthContext"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <AuthProvider>
          <Navigation toggleDarkMode={toggleDarkMode} />
          <main className="p-4 md:p-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}

