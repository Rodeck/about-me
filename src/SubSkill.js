import React, { Component } from 'react';
import './Skill.css';
import {Row, Col, Container, Button} from 'react-bootstrap'

class SubSkill extends Component {
    componentDidMount(){
        console.log("Mounting: " + this.props.Data.Name);
    }
    render() {
    return (
        <div>
            <h4>{this.props.Data.Name}</h4>    
        </div>          
    );
  }
}

export default SubSkill;