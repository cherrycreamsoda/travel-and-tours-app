import React, { useState } from 'react'
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
    label: "Destinations",
    path: "/destinations"
  },
  {
    label: "Plan Your Trip",
    path: "/plan-your-trip"
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`appNav ${isOpen ? 'isOpen' : ''}`}>
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menuToggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <div className="appNavLinks">
          {pages.map((page) => (
              <Link key={page.path} to={page.path} onClick={() => setIsOpen(false)}>
                  {page.label}
              </Link>
          ))}
        </div>
    </nav>
  )
}

export default Navbar