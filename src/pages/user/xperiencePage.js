import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel, PanelGroup, Badge, Well , TabContent} from 'react-bootstrap';
import Moment from 'react-moment';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FeelingToday from './components/feelingToday';

import data from '../../data';

// import styling and assets
import '../../assets/css/user/dashboard.css';
export default class XperiencePage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            xperienceId: this.props.match.params.xperienceId,
            minimize: false
        }

    }

    toggleSidebar = () => {
        this.setState({minimize: !this.state.minimize})
    }


    componentWillMount() {
        var xType = this.state.xperienceId.split('-')[0];
        var xId = this.state.xperienceId.split('-')[1];
        switch(xType){
            case '01':
                this.setState({
                    xperienceType: "previous",
                    data: data.previousXperiences.find(x => x.id === '01-'+xId)
                })
                break;
            case '02':
                this.setState({
                    xperienceType: "upcoming",
                    data: data.upcomingXperiences.find(x => x.id === '02-'+xId)
                })
                break;
            case '03':
                this.setState({
                    xperienceType: "recommended",
                    data: data.recommendedXperiences.find(x => x.id === '03-'+xId)
                })
                break;
        }
    }

    render() {
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar} minimized={this.state.minimize}/>
                <Sidebar userType="user" active="xperiences" minimized={this.state.minimize}/>
                <div className={"content-wrapper xperience-page " + (this.state.minimize ? "maximized" : "")}>
                    <div className="event-header">
                        {/* <img src={require("../../assets/images/xperiences/brooke-lark-609908-unsplash.jpg")} alt=""/> */}
                        <img src={require("../../assets/images/xperiences/" + this.state.data.thumbnail)} alt=""/>
                        <h2 className="title">{this.state.data.xperienceName}</h2>
                    </div>
                    <div className="content-block">
                        <div className="description-section">
                            <Panel className="description-section-panel">
                                <p>{this.state.data.xperienceDescription}</p>
                                <span className="smallcaps grey">TRAINER: {this.state.data.trainer}</span>
                                <p>{this.state.data.trainerProfile}</p>
                                <span className="smallcaps grey">TRAINER FEEDBACK</span>
                                <div className="feedback-content">
                                    <Well className="feedback-comment">
                                        <p>Some dummy data about the Trainer's feedback should go here</p>
                                    </Well>
                                </div>
                                <span className="smallcaps grey">YOUR FEEDBACK</span>
                                <div className="feedback-content">
                                    <Well className="feedback-comment">
                                        <p>Some dummy data about from the user's feedback should go here</p>
                                    </Well>
                                </div>
                                <span className="smallcaps grey">PUBLIC FEEDBACK</span>
                                <div className="feedback-content">
                                    {
                                        this.state.data.feedback.map((feedback) => {
                                            return(
                                            <Well className="feedback-comment">
                                                <div className="ratng">
                                                    <i className={(feedback.rating >= 1 ? "fas " : "far ") + "fa-star"}></i>
                                                    <i className={(feedback.rating >= 2 ? "fas " : "far ") + "fa-star"}></i>
                                                    <i className={(feedback.rating >= 3 ? "fas " : "far ") + "fa-star"}></i>
                                                    <i className={(feedback.rating >= 4 ? "fas " : "far ") + "fa-star"}></i>
                                                    <i className={(feedback.rating >= 5 ? "fas " : "far ") + "fa-star"}></i>
                                                </div>
                                                <p>{feedback.comment}</p>
                                                <span className="username">{feedback.user}</span>
                                            </Well>)
                                        })
                                    }
                                </div>
                            </Panel>
                        </div>
                        <div className="sidebar-right">
                            <Panel className="sidebar-right-panel">
                                <span className="date"><Moment format="ddd D MMMM YYYY" date={this.state.data.time}/></span><br/>
                                <span className="time"><Moment format="h:mm a" date={this.state.data.time}/></span><br/>
                                <span className="smallcaps grey">Location</span>
                                <span>{this.state.data.location}</span>
                                <div className="map-responsive"> 
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7978205658574!2d103.78439221475398!3d1.295915799054811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a51d75d1459%3A0x9d5420fe735dc87d!2s67+Ayer+Rajah+Crescent%2C+Singapore+139950!5e0!3m2!1sen!2ssg!4v1522607227690" width="600" height="450" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <span className="smallcaps grey">Tags</span>
                                <div className="tags">
                                    {
                                        this.state.data.xperienceTags.map((tag) => {
                                            return(<Badge className="tag-badge">{tag}</Badge>)
                                        })
                                    }
                                </div>
                            </Panel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

