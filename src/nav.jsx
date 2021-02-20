import React from 'react'
import {Spin as Hamburger} from 'hamburger-react'

const black = {
  background: "black"
}

export default function Nav(props){
  return (
    <div className="fixed-top">
      <nav className="navbar border-0" style={black}>
        <div data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <Hamburger rounded direction="left" color="rgba(255,255,255,.5)" />
        </div>
      </nav>
      <div className="collapse position-relative border-0" id="navbarToggleExternalContent">
        <div className="p-4 pb-5 border-0" style={black}>
          <a href="#home" className="text-decoration-none"><h5 className="text-white h4 nav-links" data-toggle="collapse" data-target="#navbarToggleExternalContent">Home</h5></a>
          <a href="#about" className="text-decoration-none"><h5 className="text-white h4 nav-links" data-toggle="collapse" data-target="#navbarToggleExternalContent">About</h5></a>
          <a href="#projects" className="text-decoration-none"><h5 className="text-white h4 nav-links" data-toggle="collapse" data-target="#navbarToggleExternalContent">Projects</h5></a>
          <a href="#skills" className="text-decoration-none"><h5 className="text-white h4 nav-links" data-toggle="collapse" data-target="#navbarToggleExternalContent">Skills</h5></a>
          <a href="#contact" className="text-decoration-none"><h5 className="text-white h4 nav-links" data-toggle="collapse" data-target="#navbarToggleExternalContent">Contact</h5></a>
        </div>
        <div className="username-greeting">
          <h4>{`Hello there!`}</h4>
        </div>
      </div>
    </div>
  )
}
