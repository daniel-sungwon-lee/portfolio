import React from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import TypeWriter from 'typewriter-effect';

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  componentDidMount(){

  }

  render(){
    return (
      <>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="text-center h6">
          <TypeWriter
            options={
              {
                strings: [`Made from scratch with <i class="fas fa-heart" style="color: #E81224"></i> by Daniel`],
                autoStart: true,
                delay: 60,
                pauseFor: 5000,
                loop: true,
                deleteSpeed: 3
              }
            }
            />
        </footer>
      </>
    )
  }
}
