/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import React from "react"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "> Link</a>
        </li>
      </ul>
    </nav>
  )
}
