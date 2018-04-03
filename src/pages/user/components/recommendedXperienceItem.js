import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import Moment from 'react-moment';

export default class XperienceItem extends Component {
    render() {
        let day = new Date(this.props.data.time);
        return (
            <div className="xperience-item"> 
                <Panel>
                    {/* <Panel.Heading>
                        <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                    </Panel.Heading> */}
                    <NavLink to={"/user/xperiences/" + this.props.data.id}>
                        <div className="image-container">
                            <div class="date">
                                <div class="day"><Moment format="D" date={day}/></div>
                                <div class="month"><Moment format="MMM" date={day}/></div>
                            </div>
                            <img src={require("../../../assets/images/xperiences/" + this.props.data.thumbnail)} style={{width:'100%'}} />
                        </div>
                        <div className="item-info">
                            <div className="item-info-display">
                                <span className="text title">{this.props.data.xperienceName}</span>
                                <span className="text trainer">{this.props.data.trainer}</span>
                            </div>
                            <div className="item-info-more">
                                <span className="title">Time: </span> <span><Moment format="D MMM YY, h:mm a" date={this.props.data.time}/> </span> <br/>
                                <span className="title">Location: </span> <span>{this.props.data.location}</span> 
                            </div>
                        </div>
                    </NavLink>
                </Panel>
            </div>
        )
    }
}
