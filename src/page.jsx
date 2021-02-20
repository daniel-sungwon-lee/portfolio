import React from 'react';
import Nav from './nav'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  componentDidMount(){

  }

  render(){
    return (
      <Nav />

    )
  }
}
