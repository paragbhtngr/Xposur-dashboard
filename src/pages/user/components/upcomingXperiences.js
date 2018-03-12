import React, { Component } from 'react';
import { Panel, Button, Badge, Carousel } from 'react-bootstrap';
import XperienceItem from './xperienceItem';

export default class UpcomingXperiences extends Component {
  render() {
    return (
        <Panel className="upcoming-xperiences">
            <Panel.Body>
                <div className="header">
                    <div className="title-container">
                        <h3 className="title">Upcoming Xperiences</h3>
                        <Badge>4</Badge>
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
                                <div></div>
                                {/* If there aren't 3 items in here, add an empty div to balance out spacing... */}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Panel.Body>
        </Panel>
    )
  }
}