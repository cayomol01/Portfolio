/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import React from "react"
import "./Navbar.scss"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#" id="first">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#prjct">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#contact"> Contact</a>
        </li>
      </ul>
    </nav>
  )
}
