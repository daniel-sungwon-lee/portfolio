import React from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

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
      </>
    )
  }
}
