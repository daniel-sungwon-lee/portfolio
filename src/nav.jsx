import React, { useState } from 'react'
import {Sling as Hamburger} from 'hamburger-react'

const black = {
  background: "black"
}

export default function Nav(props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    <div className="collapse overlay" onClick={()=>setOpen(false)} id="navbarToggleExternalContent" data-toggle="collapse" data-target="#navbarToggleExternalContent"></div>
    <div className="fixed-top">
      <nav className="navbar border-0" style={black}>
        <div data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <Hamburger toggled={isOpen} toggle={setOpen} rounded duration={0.5} direction="right" color="white" />
        </div>
      </nav>
      <div className="collapse position-relative border-0" id="navbarToggleExternalContent">
        <div className="p-4 pb-5 border-0" style={black}>
            <a href="#" className="text-decoration-none"><h5 className="h4 nav-links" onClick={() => setOpen(false)} data-toggle="collapse" data-target="#navbarToggleExternalContent">Home</h5></a>
            <a href="#about" className="text-decoration-none"><h5 className="h4 nav-links" onClick={() => setOpen(false)} data-toggle="collapse" data-target="#navbarToggleExternalContent">About</h5></a>
            <a href="#projects" className="text-decoration-none"><h5 className="h4 nav-links" onClick={() => setOpen(false)} data-toggle="collapse" data-target="#navbarToggleExternalContent">Projects</h5></a>
            <a href="#skills" className="text-decoration-none"><h5 className="h4 nav-links" onClick={() => setOpen(false)} data-toggle="collapse" data-target="#navbarToggleExternalContent">Skills</h5></a>
            <a href="#contact" className="text-decoration-none"><h5 className="h4 nav-links" onClick={() => setOpen(false)} data-toggle="collapse" data-target="#navbarToggleExternalContent">Contact</h5></a>
        </div>
      </div>
    </div>
    </>
  )
}
