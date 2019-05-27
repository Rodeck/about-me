import React, { Component } from 'react';
import './Project.css';
import {Row, Col, Container, Button} from 'react-bootstrap'

class Project extends Component {  
  loadImage() {
    var image = this.props.Data.Image;
    return require('./image1.png');
  }
  render() {
    var buttons = new Array();
    this.props.Data.Urls.forEach(b => {
        buttons.push(<a href={b.Url}>{b.Desc}</a>);
        buttons.push(<br></br>)
    })
    return (
        <div className="project-container">
            <Row>
                <Col sm={4}>
                    <h2> {this.props.Data.Name} </h2>
                </Col>
                <Col sm={8}>
                    
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Row>
                        <Col sm={12} className='image-container'>
                            <img src={this.loadImage()} className='img-responsive'/>
                        </Col>
                    </Row>
                </Col>
                <Col sm={8} className="description-col">
                    <Row>
                        <Col sm={12} className='description-container'>
                            {this.props.Data.Description}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='controll-container'>
                            {buttons}
                        </Col>
                    </Row>
                </Col>    
            </Row>        
        </div>
    );
  }
}

export default Project;