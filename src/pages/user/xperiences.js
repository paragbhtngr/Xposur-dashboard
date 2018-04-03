import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {FormGroup, FormControl, InputGroup, Button, Panel} from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FeelingToday from './components/feelingToday';
// import styling and assets
import '../../assets/css/user/dashboard.css';

export default class Xperiences extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            minimize: false
        }

    }

    toggleSidebar = () => {
        this.setState({minimize: !this.state.minimize})
    }

    render() {
        return (
            <div>
                <Navbar toggleSidebar={this.toggleSidebar} minimized={this.state.minimize}/>
                <Sidebar userType="user" active="xperiences" minimized={this.state.minimize}/>
                <div className={"content-wrapper " + (this.state.minimize ? "maximized" : "")}>
                </div>
            </div>
        );
    }
}

