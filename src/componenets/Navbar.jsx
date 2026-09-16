import React from 'react'
import { Link } from "react-router-dom"

const pages = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Tours",
    path: "/tours"
  },
  {
    label: "Explore",
    path: "/explore"
  },
  {
    label: "Plan Your Trip",
    path: "/plan-your-trip"
  }
];

function Navbar() {
  return (
    <nav className="appNav">
        {pages.map((page) => (
            <Link key={page.path} to={page.path}>
                {page.label}
            </Link>
        ))}
    </nav>
  )
}

export default Navbar