import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Navbar, Nav, NavItem, MenuItem, NavDropdown, Image, Badge } from 'react-bootstrap';
import Moment from 'react-moment';

// import styling and assets
import '../../assets/css/components/navbar.css';
import logo from '../../assets/images/logo.png';

import data from '../../data';
import previousXperiences from '../user/components/previousXperiences'

class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newNotifications: data.notifications.filter(e => e.unread).length,
            newMessages: data.messages.filter(e => e.unread).length,
            newFeedback: data.feedback.filter(e => e.unread).length,
        }
    }

    render() {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a onClick={this.props.toggleSidebar}><img className={"logo " + (this.props.minimized ? "minimized" : "")} src={logo} alt="logo"/> Dashboard</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} id="notifications" noCaret title={
                                <div className="nav-dropdown">
                                    <span><i className="fas fa-globe"></i></span>
                                    {this.state.newNotifications > 0 ? (
                                            <Badge>{this.state.newNotifications}</Badge>
                                        ) : ( null )}
                                </div>
                            }
                            onClick={() => {this.setState({newNotifications: 0})}}
                            >  
                            <div className="menu-header">Notifications</div>
                            {
                                data.notifications.map((notif) => {
                                    return(
                                        <MenuItem eventKey={notif.id} className={"menu-item "+ (notif.unread? "unread" : "")}>
                                        <div className="text-container">
                                            <p className={"notification-text"}>{notif.text}</p>
                                            <p className="notification-time"><Moment fromNow date={notif.date}/></p>
                                        </div>
                                        </MenuItem>
                                    )
                                })
                            }
                        </NavDropdown>
                        <NavDropdown eventKey={2} id="messages" noCaret title={
                                <div className="nav-dropdown">
                                    <span><i className="fas fa-comment"></i></span>
                                    {this.state.newMessages > 0 ? (
                                            <Badge>{this.state.newMessages}</Badge>
                                        ) : ( null )}
                                </div>
                            }
                            onClick={() => {this.setState({newMessages: 0})}}
                            >  
                            <div className="menu-header">Messages</div>
                            {
                                data.messages.map((msg) => {
                                    return(
                                        <MenuItem eventKey={msg.id} className={"menu-item "+ (msg.unread? "unread" : "")}>
                                            <div className="img-container">
                                                <img src={require("../../assets/images/users/" + msg.fromProfilePic)} alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <p className="msg-sender">{msg.from}</p>
                                                <p className="msg-text">{msg.text}</p>
                                                <p className="msg-time"><Moment fromNow date={msg.date}/></p>
                                            </div>
                                        </MenuItem>
                                    )
                                })
                            }
                            <MenuItem divider />
                            <div style={{width: '100%', textAlign: 'center'}}>
                                <NavLink to="/user/messages">
                                    <p> View all </p>
                                </NavLink>
                            </div>
                        </NavDropdown>
                        <NavDropdown eventKey={3} id="feedback" noCaret title={
                                <div className="nav-dropdown">
                                    <span><i className="fas fa-edit"></i></span>
                                    {this.state.newFeedback > 0 ? (
                                            <Badge>{this.state.newFeedback}</Badge>
                                        ) : ( null )}
                                </div>
                            } 
                            onClick={() => {this.setState({newFeedback: 0})}}
                            >
                            <div style={{paddingLeft: '20px', marginTop: '10px', marginBottom: '10px', fontWeight: 'bold'}}>Feedback</div>
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">
                            <span className="xposur-content">2400 </span> xposur
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;
