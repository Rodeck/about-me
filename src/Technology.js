import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Project from './Project.js'
import Skill from './Skill'
import CommonCss from './Common.css'

class Technology extends Component {
  constructor(props) {
    super(props);
    this.skills = [
        {
            Name: ".Net",
            Description: "My experience in .Net includes more than two years of commercial work with, mainly, web applications. Main goal of my work was to design, execute test and deploy new features for large client from financial industry.",
            Image: "dotnet.png",
            Percentage: 75,
            SubSkills: [
                {
                    Name: ".Net core"
                },
                {
                    Name: "MVC 5"
                },
                {
                    Name: "Visual Studio 2017"
                },
                {
                    Name: "Web Api"
                }
            ]
        },
        {
            Name: "Javascript",
            Description: "Some part of my commercial work required use of Javascript in variuos cases - React in frontend as well as JQuery, Axios and Vue.js. Besides of my .Net developer work I spent some time with Javascript on my own, personal projects.",
            Image: "react.png",
            Percentage: 60,
            SubSkills: [
                {
                    Name: "React.js"
                },
                {
                    Name: "Vue.js"
                },
                {
                    Name: "Ajax"
                },
                {
                    Name: "Axios"
                },
                {
                    Name: "JQuery"
                },
                {
                    Name: "VSCode"
                }             
            ]
        },
        {
            Name: "SQL",
            Description: "SQL was huge part of my first job as programmer. Due to business logic written in database I learned about transactions, triggers, stored procedures, temporary tables as well as about optimalization and work with huge amount of data.",
            Image: "sql.png",
            Percentage: 75,
            SubSkills: [
                {
                    Name: "Firebird"
                },
                {
                    Name: "MsSQL"
                },
                {
                    Name: "SSMS"
                },
                {
                    Name: "IbExpert"
                },
                {
                    Name: "P-SQL"
                },
                {
                    Name: "T-SQL"
                }
            ]
        },
        {
            Name: "Software engineering",
            Description: "To make my work more efficient, safe and easier I use various of programms. I have experience in Git as a source control with SourceTree as git interface, Jenkins for CI and Jira for work management.",
            Image: "git.png",
            Percentage: 75,
            SubSkills: [
                {
                    Name: "Jenkins"
                },
                {
                    Name: "SourceTree"
                },
                {
                    Name: "GitLab"
                },
                {
                    Name: "Git"
                },
                {
                    Name: "Jira"
                }
            ]
        },
        {
            Name: "Python",
            Description: "In my free time I learned some Python, specialy for creating some web applications, control of external parts of Raspberry Pi and basics of deep learning.",
            Image: "python.png",
            SubSkills: [
                {
                    Name: "Flask"
                }
            ]
        }
        ,
        {
            Name: "Unity",
            Description: "",
            Image: "unity.png",
            SubSkills: [
            ]
        }
    ]
  }
  render() {
    return (
        <div className="App">
            <Row>
                <Col sm={3}>
                    <Skill Data={this.skills[0]} />
                </Col>
                <Col sm={3}>
                    <Skill Data={this.skills[1]} />
                </Col>
                <Col sm={3}>
                    <Skill Data={this.skills[2]} />
                </Col>
                <Col sm={3}>
                    <Skill Data={this.skills[3]} />
                </Col>
            </Row>
            <Row>
                <hr></hr>
            </Row>
            <Row>
                <Col sm={3}>
                    <Skill Data={this.skills[4]} />
                </Col>
                <Col sm={3}>
                    <Skill Data={this.skills[5]} />
                </Col>
            </Row>
        </div>
    )
  }
}

export default Technology;
