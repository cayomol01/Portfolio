/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import React from "react"
import "./About.scss"
import FotoReact from "../../assets/React.png"
import FotoSass from "../../assets/Sass.png"
import FotoWeb from "../../assets/Webpack.png"
import FotoHtml from "../../assets/HTML.png"
import FotoBabel from "../../assets/Babel.png"

export default function About() {
  return (
    <>
      <h1>
        <span className="Title2">About</span>
      </h1>
      <div className="row1 row justify-content-center">
        <div className="col-md-8">
          <p>
            Soy un estudiante de ingeniería en computación con
            una afición por la creación. Siendo una carrera con
            mucha matemática también creo que hay que experimentar
            con el lado creativo que ofrece la carrera. Esto se puede
            lograr a través de la creación de páginas web. Por el momento,
            soy proficiente en las siguientes tecnologías:
          </p>
        </div>
        <div className="fotos col-md-6">
          <img src={FotoReact} alt="React" className="img-fluid" />
          <img src={FotoSass} alt="Sass" className="img-fluid" />
          <img src={FotoWeb} alt="Webpack" className="img-fluid" />
          <img src={FotoHtml} alt="HTML" className="img-fluid" />
          <img src={FotoBabel} alt="Babel" className="img-fluid" />

        </div>
      </div>
    </>
  )
}
