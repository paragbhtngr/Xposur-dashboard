import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import styling and assets
import {FormGroup, FormControl, InputGroup, Button, ListGroup} from 'react-bootstrap';
import '../../assets/css/components/sidebar.css';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="sidebar">
                    {
                        this.props.userType === "user" ? (
                            <ul className="sidebar-menu">
                                <li className={ "sidebar-menu-item " + (this.props.active === "dashboard" ? "active" : "")}>
                                    <NavLink to="/user/dashboard">
                                        <i className="fas fa-home"></i> 
                                        <p> Dashboard </p>
                                    </NavLink>
                                </li>
                                <li className={ "sidebar-menu-item " + (this.props.active === "profile" ? "active" : "")}>
                                    <NavLink to="/user/profile">
                                        <i className="fas fa-user-circle"></i> 
                                        <p> Profile </p>
                                    </NavLink>
                                </li>
                                <li className={ "sidebar-menu-item " + (this.props.active === "feedback" ? "active" : "")}>
                                    <NavLink to="/user/feedback">
                                        <i className="fas fa-edit"></i> 
                                        <p> Feedback </p>
                                    </NavLink>
                                </li>
                                <li className={ "sidebar-menu-item " + (this.props.active === "messages" ? "active" : "")}>
                                    <NavLink to="/user/messages">
                                        <i className="fas fa-comments"></i> 
                                        <p> Messages </p>
                                    </NavLink>
                                </li>
                                <li className={ "sidebar-menu-item " + (this.props.active === "latestnews" ? "active" : "")}>
                                    <NavLink to="/user/latestnews">
                                        <i className="fas fa-newspaper"></i> 
                                        <p> Latest News </p>
                                    </NavLink>
                                </li>
                                <li className={ "sidebar-menu-item " + (this.props.active === "xperiences" ? "active" : "")}>
                                    <NavLink to="/user/xperiences">
                                        <i className="fab fa-gratipay"></i> 
                                        <p> Xperiences </p>
                                    </NavLink>
                                </li>
                            </ul>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default Login;
