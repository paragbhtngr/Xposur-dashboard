import React, { Component } from 'react';
import { Panel, Button, Badge, Carousel } from 'react-bootstrap';
import XperienceItem from './xperienceItem';

export default class PreviousXperiences extends Component {
  render() {
    return (
        <Panel className="previous-xperiences">
            <Panel.Body>
                <div className="header">
                    <div className="title-container">
                        <h3 className="title">Previous Xperiences</h3>
                        <Badge>15</Badge>
                    </div>
                    <Button bsStyle="primary" bsSize="small">See all</Button>
                </div>
                <div className="xperience-container">
                <Carousel
                        prevIcon={<i className="fas fa-chevron-left"></i>} 
                        nextIcon={<i className="fas fa-chevron-right"></i>} 
                        interval={null}
                    >
                    <Carousel.Item>
                        <div className="gallery-container">
                            <XperienceItem/>
                            <XperienceItem/>
                            <XperienceItem/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="gallery-container">
                            <XperienceItem/>
                            <XperienceItem/>
                            <XperienceItem/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="gallery-container">
                            <XperienceItem/>
                            <XperienceItem/>
                            <XperienceItem/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="gallery-container">
                            <XperienceItem/>
                            <XperienceItem/>
                            <XperienceItem/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="gallery-container">
                            <XperienceItem/>
                            <XperienceItem/>
                            <XperienceItem/>
                        </div>
                    </Carousel.Item>
                </Carousel>
                </div>
            </Panel.Body>
        </Panel>
    )
  }
}
