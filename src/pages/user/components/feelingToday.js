import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel } from 'react-bootstrap';

class FeelingToday extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showSurvey: true,
            hover: 0,
            status: 0,
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.showSurvey ? (
                        <div className="feeling-today">
                            <p>How are you feeling today?</p>
                            <div className="stars-container">
                                <div 
                                    className={"star " + (this.state.hover >= 1 ? "hovered " : "") + (this.state.status >= 1 ? "filled" : "")} 
                                    onMouseEnter={() => {this.setState({ hover: 1 })}} 
                                    onMouseLeave={() => {this.setState({ hover: 0 })}}
                                    onClick={() => {this.setState({ status: 1 })}}
                                    > 
                                    <i className="fas fa-star"></i> 
                                </div>
                                <div 
                                    className={"star " + (this.state.hover >= 2 ? "hovered " : "") + (this.state.status >= 2 ? "filled" : "")} 
                                    onMouseEnter={() => {this.setState({ hover: 2 })}} 
                                    onMouseLeave={() => {this.setState({ hover: 0 })}}
                                    onClick={() => {this.setState({ status: 2 })}}
                                    > 
                                    <i className="fas fa-star"></i> 
                                </div>
                                <div 
                                    className={"star " + (this.state.hover >= 3 ? "hovered " : "") + (this.state.status >= 3 ? "filled" : "")} 
                                    onMouseEnter={() => {this.setState({ hover: 3 })}} 
                                    onMouseLeave={() => {this.setState({ hover: 0 })}}
                                    onClick={() => {this.setState({ status: 3 })}}
                                    > 
                                    <i className="fas fa-star"></i> 
                                </div>
                                <div 
                                    className={"star " + (this.state.hover >= 4 ? "hovered " : "") + (this.state.status >= 4 ? "filled" : "")} 
                                    onMouseEnter={() => {this.setState({ hover: 4 })}} 
                                    onMouseLeave={() => {this.setState({ hover: 0 })}}
                                    onClick={() => {this.setState({ status: 4 })}}
                                    > 
                                    <i className="fas fa-star"></i> 
                                </div>
                                <div 
                                    className={"star " + (this.state.hover >= 5 ? "hovered " : "") + (this.state.status >= 5 ? "filled" : "")} 
                                    onMouseEnter={() => {this.setState({ hover: 5 })}} 
                                    onMouseLeave={() => {this.setState({ hover: 0 })}}
                                    onClick={() => {this.setState({ status: 5 })}}
                                    > 
                                    <i className="fas fa-star"></i> 
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        );
    }
}

export default FeelingToday;
