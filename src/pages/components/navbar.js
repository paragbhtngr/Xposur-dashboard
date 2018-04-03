import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Navbar, Nav, NavItem, MenuItem, NavDropdown, Image, Badge } from 'react-bootstrap'

// import styling and assets
import '../../assets/css/components/navbar.css';
import logo from '../../assets/images/logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newNotifications: 3,
            newMessages: 0,
            newFeedback: 1,
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
                            <div style={{paddingLeft: '20px', marginTop: '10px', marginBottom: '10px', fontWeight: 'bold'}}>Notifications</div>
                            <MenuItem eventKey={1.1}>Action</MenuItem>
                            <MenuItem eventKey={1.2}>Another action</MenuItem>
                            <MenuItem eventKey={1.3}>Something else here</MenuItem>
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
                            <div style={{paddingLeft: '20px', marginTop: '10px', marginBottom: '10px', fontWeight: 'bold'}}>Messages</div>
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something else here</MenuItem>
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

export default Login;
