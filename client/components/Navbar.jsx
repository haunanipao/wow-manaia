import React from 'react'

export default function Navbar() {
  return (
    <header>
      <div>Hello there</div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/redux">Home w/Redux</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
