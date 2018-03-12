import React, { Component } from 'react';
import { Panel, Button, Badge, Carousel } from 'react-bootstrap';
import XperienceItem from './recommendedXperienceItem';

export default class RecommendedXperiences extends Component {
  render() {
    return (
        <div className="recommended-xperiences-container">
            <Panel className="recommended-xperiences">
                <Panel.Body>
                    <div className="header">
                        <div className="title-container">
                            <h3 className="title">Recommended Xperiences</h3>
                            <Badge>7</Badge>
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
                                    <XperienceItem/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="gallery-container">
                                    <XperienceItem/>
                                    <XperienceItem/>
                                    <XperienceItem/>
                                    <div></div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Panel.Body>
            </Panel>
        </div>
    )
  }
}
