/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import React from "react"
import "./Card.scss"

export default function Card({
  imagen, titulo, descripcion, link,
}) {
  const estilo = {
    backgroundImage: `url(${imagen})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center/cover",
  }

  return (
    <div className="card" style={estilo}>
      <div className="Principal">
        <div className="estilizar" />
        <h4>
          <span className="TituloCarta">{titulo}</span>
        </h4>
      </div>
      <div className="Info">
        <div className="estilizar" />
        <div className="row justify-content-center">
          <p className="TituloC">{titulo}</p>
          <p>{descripcion}</p>
          <a href={link} className="visitar">
            <div className="probar">
              Probar

            </div>
          </a>
        </div>

      </div>
    </div>
  )
}
