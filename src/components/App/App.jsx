/* eslint-disable no-alert */
import React from "react"
import "./App.scss"
import Navbar from "../Navbar/Navbar"
import Container1 from "../Intro/Intro"
import Fondo from "../../assets/Background.mp4"
import Container2 from "../Projects/Projects"
import Container3 from "../About/About"

export default function App() {
  return (
    <>
      <section className="MainPage">
        <div className="video-container">
          <video src={Fondo} autoPlay loop muted />
        </div>

        <div className="main">

          <Navbar />
          <Container1 />
        </div>
      </section>
      <section className="projects" id="prjct">
        <div className="video-container3">
          <video src={Fondo} autoPlay loop muted />
        </div>
        <Container2 />
      </section>
      <section className="About" id="about">
        <div className="video-container2">
          <video src={Fondo} autoPlay loop muted />
        </div>
        <div className="info2">
          <Container3 />

        </div>
      </section>
      <section className="Contact" id="contact">
        <div className="video-container4">
          <video src={Fondo} autoPlay loop muted />
        </div>
        <div className="cntct">

        </div>
      </section>

    </>
  )
}
