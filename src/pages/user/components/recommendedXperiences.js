import React, { Component } from 'react';
import { Panel, Button, Badge, Carousel } from 'react-bootstrap';
import XperienceItem from './recommendedXperienceItem';

import data from '../../../data';

export default class RecommendedXperiences extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            xperiences: data.recommendedXperiences
        }
    }

    renderCarouselItem = (startIndex) => {
        console.log("rendering carousel item " + startIndex);
        let output = [];
        for(let j = startIndex; 
            j < Math.min(startIndex + 3, this.state.xperiences.length);
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
            i+=3) {
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
            <div className="recommended-xperiences-container">
                <Panel className="recommended-xperiences">
                    <Panel.Body>
                        <div className="header">
                            <div className="title-container">
                                <h3 className="title">Recommended Xperiences</h3>
                                <Badge>5</Badge>
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
            </div>
        )
    }
}
