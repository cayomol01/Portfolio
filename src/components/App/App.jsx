/* eslint-disable no-alert */
import React from "react"
import "./App.scss"
import Navbar from "../Navbar/Navbar"
import Container1 from "../Intro/Intro"
import Fondo from "../../assets/Background.mp4"

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
        a
      </section>

    </>
  )
}
