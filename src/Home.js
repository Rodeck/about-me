import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Project from './Home.css'
import CommonCss from './Common.css'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <h2 className="panel-header">About me</h2>
            <hr/>
            <p>   My name is Gabriel and this website is designed to show you my personal projects, programming languages and tools im currently using.</p>
        </div>
    )
  }
}

export default Home;
