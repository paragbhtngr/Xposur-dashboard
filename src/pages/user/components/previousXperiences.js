import React, { Component } from 'react';
import { Panel, Button, Badge, Carousel } from 'react-bootstrap';
import XperienceItem from './xperienceItem';

import data from '../../../data';

export default class previousXperiences extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            xperiences: data.previousXperiences
        }
    }

    renderCarouselItem = (startIndex) => {
        console.log("rendering carousel item " + startIndex);
        let output = [];
        for(let j = startIndex; 
            j < Math.min(startIndex + 2, this.state.xperiences.length);
            j++) {
            console.log("   item number ", j);
            output.push(
                <XperienceItem data = {this.state.xperiences[j]} />
            )
        }
        return output;
    }

    renderCarouselContainer = () => {
        let output = []
        for(let i = 0; 
            i < this.state.xperiences.length; 
            i+=2) {
            console.log("carousel container " + i + ":");
            output.push(
                <Carousel.Item key={i}>
                    <div className="gallery-container">
                        {this.renderCarouselItem(i)}
                    </div>
                </Carousel.Item>
            )

        }

        return output;
    }

    render() {
        return (
            <Panel className="previous-xperiences">
                <Panel.Body>
                    <div className="header">
                        <div className="title-container">
                            <h3 className="title">Previous Xperiences</h3>
                            <Badge>{this.state.xperiences.length}</Badge>
                        </div>
                        <Button bsStyle="primary" bsSize="small">See all</Button>
                    </div>
                    <div className="xperience-container">
                    <Carousel
                            prevIcon={<i className="fas fa-chevron-left"></i>} 
                            nextIcon={<i className="fas fa-chevron-right"></i>} 
                            interval={null}
                        >
                        { this.renderCarouselContainer() }
                    </Carousel>
                    </div>
                </Panel.Body>
            </Panel>
        )
    }
}
