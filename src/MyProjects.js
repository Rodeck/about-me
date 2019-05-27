import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Project from './Project.js'
import CommonCss from './Common.css'

class MyProjects extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.displayName);
  }
  render() {
    return (
    <div className="App">
        <div className="App-intro">
        <Project Data={this.props.projects[0]}/>
        <Project Data={this.props.projects[1]}/>
        </div>
    </div>
    )
  }
}

export default MyProjects;
