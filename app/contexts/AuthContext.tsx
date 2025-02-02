"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  userRole: string | null
  login: (role: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Clear any potentially conflicting local storage data
    const storedRole = localStorage.getItem("userRole")
    if (storedRole) {
      setIsAuthenticated(true)
      setUserRole(storedRole)
    } else {
      localStorage.removeItem("userRole")
    }
  }, [])

  const login = (role: string) => {
    localStorage.setItem("userRole", role)
    setIsAuthenticated(true)
    setUserRole(role)
    router.push(`/dashboard/${role}`)
  }

  const logout = () => {
    localStorage.removeItem("userRole")
    setIsAuthenticated(false)
    setUserRole(null)
    router.push("/")
  }

  return <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}