import React, { Component } from 'react';
import './Skill.css';
import SubSkill from './SubSkill'
import {Row, Col, Container, Button} from 'react-bootstrap'

class Skill extends Component {
    renderSubSkill(skill, index)
    {
        console.log("Rendering: " + skill.Name);
        return(
            <div class="sub-skills">
                <SubSkill Data={skill} key={index}/>
            </div>
        );
    }
    loadImage() {
        var image = this.props.Data.Image;
        return require('./' + this.props.Data.Image);
    }
    render() {
        console.log(this.props.Data);
    return (
      <Row>
          <Col sm={1}></Col>
          <Col sm={10} className="project-container">
            <Row>
                <Col sm={12}>
                    <img src={this.loadImage()} alt={this.props.Data.Image} className="project-image center-block"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h3>{this.props.Data.Name}</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="project-description">
                    {this.props.Data.Description}
                    <hr/>
                </Col>
            </Row>     
            <Row>
                <Col sm={12} className="sub-skills">
                    
                    {
                        this.props.Data.SubSkills.map( (skill, index) => {
                            return this.renderSubSkill(skill, index);}
                            )
                    }
                </Col>
            </Row> 
          </Col>
          <Col sm={1}></Col>
      </Row>
    );
  }
}

export default Skill;