import React from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import TypeWriter from 'typewriter-effect';
import { Zoom, Fab, useScrollTrigger } from '@material-ui/core';
import { KeyboardArrowUpRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fab: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem"
  }
})

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div role="presentation" className={classes.fab}>
        {children}
      </div>
    </Zoom>
  );
}


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
        <ScrollTop {...this.props}>
          <a href="#">
            <Fab color="secondary">
              <KeyboardArrowUpRounded fontSize="large" />
            </Fab>
          </a>
        </ScrollTop>
      </>
    )
  }
}
