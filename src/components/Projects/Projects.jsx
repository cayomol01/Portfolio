/* eslint-disable no-alert */
import React from "react"
import "./Projects.scss"
import Carta from "../Carta/Card"
import FotoCalcu from "../../assets/Calculadora.jpeg"
import Back from "../../assets/Back.png"
import FotoPagina from "../../assets/Nasa.jpeg"

export default function App() {
  const des1 = "Calculadora hecha con React css. Implementada para quese puedan hacer operaciones desde suma hasta modulo. También contiene todos sus tests respectivos para saber que funciona correctamente."
  const des2 = "Página web hecha con React y scss. En este caso se puede ver el juego de memoria con una temática del animé hunter x hunter en el cual se contarán los movimientos y se tendrá una puntuación."
  const des3 = "Página web hecha con React y scss. Se realizó una copia de la página oficial de la NASA con algunos cambios para que se pudiera implementar apropiadamente con componentes y con imágenes distintas."
  const title1 = "Calculadora"
  const title2 = "Juego de Memoria"
  const title3 = "NASA"
  const im1 = FotoCalcu
  const im2 = Back
  const im3 = FotoPagina
  const link1 = "http://52.21.33.52:3063/"
  const link2 = "http://52.21.33.52:3062/"
  const link3 = "http://52.21.33.52:3061/"

  return (
    <>
      <h1>
        <span className="Title1">Projects</span>
      </h1>
      <div className="container">
        <Carta
          titulo={title1}
          descripcion={des1}
          imagen={im1}
          link={link1}
        />
        <Carta
          titulo={title2}
          descripcion={des2}
          imagen={im2}
          link={link2}
        />
        <Carta
          titulo={title3}
          descripcion={des3}
          imagen={im3}
          link={link3}
        />
      </div>

    </>
  )
}
