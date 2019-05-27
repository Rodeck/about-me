import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import CommonCss from './Common.css'
import AboutMe from './AboutMe.css'

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <Row>
                <Col sm={4} className="col-no-margin">
                    <div className="panel-title">
                        <h3>About me</h3>
                    </div>
                </Col>
                <Col sm={6} className="col-no-margin">
                    <div className="panel-title">
                        <h3>About me</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={3} className="my-info">
                    <Row>
                        <Col sm={12} className="center-image">
                                <img class="img-circle" alt="" src={require('./me.png')} />
                        </Col>                       
                    </Row>
                    <Row className="anchors">
                        <a href="https://www.linkedin.com/in/gabriel-pająk-a5b3a912b/" class="float-left small-icon">
                            <img src={require('./LinkedinIco.png')} className="small-image"/>
                        </a>
                        <a href="#" class="float-left">
                                    <img src={require('./GitHubIco.png')} className="small-image"/>
                        </a>
                    </Row>                          
                </Col>
                <Col sm={1}>
                </Col>
                <Col sm={5} className="my-info">
                <p>Gabriel Pająk</p>
                <p>Wrocław, Poland</p>
                <p>C#/SQL Developer</p>
                </Col>
            </Row>
            <Row>
                <div class="">
                    <div class="panel-title">
                        <h3 id="timeline">Timeline</h3>
                    </div>
                    <div class="timeline-content">
                        <div class="container">
                            <ul class="timeline">
                                <li>
                                <div class="timeline-badge"><i class="glyphicon glyphicon-education"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">Early education</h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2001-2010</small></p>
                                    </div>
                                    <div class="timeline-body">
                                    <p>
                                        Nothing special here, I just started my education, passed through first 9 years and then, at the end of gymnasium I began to realize what I want do do in life.
                                        I started to write some simple programms doing basic math calculations in Turbo Pascal.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline-inverted">
                                <div class="timeline-badge"><i class="glyphicon glyphicon-education"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">High school</h4>
                                    </div>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2010-2013</small></p>
                                    <div class="timeline-body">
                                    <p>
                                        I started attending to III High School in Krosno - my specialization was math-it. In highschool I began to explore new languages and possibilities.
                                        I learned basics of C++, Java and made first steps to Game Design (who doesn't wanted to make games?!).
                                        At the end of highschool I passed high-school certificate and decided to go to Wroclaw University of Technology - Computer Science at the Department of Electronic.  
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline">
                                <div class="timeline-badge"><i class="glyphicon glyphicon-education"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">Univeristy</h4>
                                    </div>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2013-2016</small></p>
                                    <div class="timeline-body">
                                    <p>
                                        Besides of learning at the University I managed to find some time on my own and get to know various languages, technologies and frameworks:
                                        expanded my C++ and Java knowledge, learned basisc of Python, JavaScript and finally dived into .Net world (C#). As my C# skills rised I started
                                        to using Unity to make some simple games.                                                
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline-inverted">
                                <div class="timeline-badge"><i class="glyphicon glyphicon-knight"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">Summer training</h4>
                                    </div>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2015-2015</small></p>
                                    <div class="timeline-body">
                                    <p>
                                        My first "commercial programming experience" was at summer training at Wroclaw branch of Techland, where I was sharpening my
                                        Game design and C++ skills for a month. After I finished training i decided to go in different direction.
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline">
                                <div class="timeline-badge"><i class="glyphicon glyphicon-usd"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">First work</h4>
                                    </div>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2015-current</small></p>
                                    <div class="timeline-body">
                                    <p>
                                        After summer trainig I started searching for job where I could sharpen my .Net framework skills and I found perfect work for me
                                        in company called Sente. It gives me oppurtunity to work with experienced programmers who share they knowledge to me, I have chance to
                                        raise my software development process - use version control system, work with databases but also contact to clients and understand theyrs needs.                                        
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline-inverted">
                                <div class="timeline-badge"><i class="glyphicon glyphicon-education"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">Changed university</h4>
                                    </div>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2017-current</small></p>
                                    <div class="timeline-body">
                                    <p>
                                        When I started full-time work at Sente I began to realise I cannot continue daily studies - it was impossible to me. I decided to start 
                                        part-time study at Dolnośląska Szkoła Wyższa in field of study computer science.

                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline">
                                <div class="timeline-badge"><i class="glyphicon glyphicon-hourglass"></i></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    <h4 class="timeline-title">?</h4>
                                    </div>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> NOW</small></p>
                                    <div class="timeline-body">
                                    <p>
                                        Everything what the future holds!                                      
                                    </p>
                                    </div>
                                </div>
                                </li>        
                            </ul>
                        </div>
                    </div>
                </div>
            </Row>
            </div>              
    )
  }
}

export default About;
