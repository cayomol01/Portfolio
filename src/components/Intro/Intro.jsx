/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import React from "react"
import "./Intro.scss"

export default function Navbar() {
  return (
    <div className="cont1">
      <hgroup className="intro">
        <h1>
          <span className="name">Cayetano Molina</span>
        </h1>
        <h2>
          <span className="job">Web Developer</span>
        </h2>
      </hgroup>
      <div className="foto" />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <p>
            Creando páginas web para poder darle vida a tus y mis ideas.
            Desde lo más absurdo como un videojuego hasta una página personal.
            Un paso a la vez, se podrás tener una página web que te ayude a dar
            un mejor servicio a tus clientes o incluso atraer a más clientes.
          </p>
        </div>
      </div>
    </div>

  )
}
