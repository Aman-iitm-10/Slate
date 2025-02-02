"use client"

import Link from "next/link"

interface NavItem {
  title: string
  path: string
}

interface RoleNavigationProps {
  role: string
  items: NavItem[]
}

export default function RoleNavigation({ role, items }: RoleNavigationProps) {
  return (
    <nav className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6">
      <ul className="flex flex-wrap gap-4">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={`/dashboard/${role}${item.path}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

