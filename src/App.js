import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col, Container, Button, ButtonToolbar} from 'react-bootstrap'
import Project from './Project.js'
import MyProjects from './MyProjects';
import Home from './Home';
import Technology from './Technology';
import About from './About';
import Contact from './Contact';
import CommonCss from './Common.css'
 
import AlarmIcon from 'react-material-icons/icons/action/alarm';

class App extends Component {
  constructor(props) {
    super(props);
    this.projects = [
        {
          Name: "This web-app",
          Image: "./about-me.png",
          Description: "This app is a project on itself. It is build with react and so far doesn't have any backend api. You can see my tech-skills, read about me and see different projects of mine.",
          Urls: [ {
            Url: "https://github.com/Rodeck/about-me",
            Desc: "GitHub" 
          }]
        },
        {
          Name: "Procrastination killer",
          Image: "./image1.png",
          Description: "Procrastination killer is application designed to maintain productivity. User can add so called todos, complete them and be rewarded. App will have graphical charts. Backend is written in .Net core C# (mayby with use of gRPC in future) and frontend Vue.js + Vuex + Vue Material.",
          Urls: [ 
            {
              Url: "https://github.com/Rodeck/ProcrastinationKiller",
              Desc: "Backend on GitHub"
            }, 
            {
              Url: "https://github.com/Rodeck/proc-killer-web",
              Desc: "Frontend on GitHub"
            }]
        }
    ]
    this.loadContent = this.loadContent.bind(this);
    this.setState(
      {
        currentContent: 'default'
      }
    )
  }
  loadContent(e)
  {
    this.setState(
      {
        currentContent: e
      });
    console.log(this.currentContent === 'projects');
  }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <div className="App-header">
          <h1 className="App-title">My example projects</h1>
        </div>
        <div className="App-intro">
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Row>
                <Col sm={12} className="navigation">
                  <button onClick={() => this.loadContent('default')} className={(this.state ? (this.state.currentContent === 'default' ? 'active-button' : 'unactive-button') : 'active-button') + ' button-first nav-button'}> Home </button>
                  <button  onClick={() => this.loadContent('about')} className={(this.state ? this.state.currentContent === 'about' ? 'active-button' : 'unactive-button' : 'unactive-button') + ' button-middle nav-button'}> About me </button>
                  <button  onClick={() => this.loadContent('projects')} className={(this.state ? this.state.currentContent === 'projects' ? 'active-button' : 'unactive-button' : 'unactive-button') + ' button-middle nav-button'}> My projects </button>
                  <button  onClick={() => this.loadContent('technology')} className={(this.state ? this.state.currentContent === 'technology' ? 'active-button' : 'unactive-button' : 'unactive-button') + ' button-middle nav-button'}> My technology </button>
                  <button  onClick={() => this.loadContent('contact')} className={(this.state ? this.state.currentContent === 'contact' ? 'active-button' : 'unactive-button' : 'unactive-button') + ' button-last nav-button'}> Contact </button>
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="content">
                  {this.state ? this.state.currentContent === 'projects' ? <MyProjects projects={this.projects}/> : null : null}
                  {this.state ? this.state.currentContent === 'technology' ? <Technology projects={this.projects}/> : null : null}
                  {this.state ? this.state.currentContent === 'contact' ? <Contact projects={this.projects}/> : null : null}
                  {this.state ? this.state.currentContent === 'default' ? <Home/> : null : <Home/>}
                  {this.state ? this.state.currentContent === 'about' ? <About/> : null : null}
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
